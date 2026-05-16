#!/usr/bin/env node
/**
 * Renders /resume on a local Next.js production server and writes it to
 * public/dylan-kilgore-resume.pdf. Run after résumé content updates so the
 * static PDF stays in sync with the web view.
 *
 * Usage:
 *   npm run build                       # produces .next/
 *   node scripts/generate-resume-pdf.mjs
 *
 * Or the combined script:
 *   npm run generate:resume
 *
 * Requires Puppeteer (devDependency). Puppeteer downloads its own Chromium on
 * install (~170 MB) — that's a one-time cost.
 */

import puppeteer from "puppeteer";
import { spawn } from "node:child_process";
import { setTimeout as wait } from "node:timers/promises";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";

const PORT = 3737;
const HOST_URL = `http://127.0.0.1:${PORT}`;
const PDF_PATH = join(process.cwd(), "public", "dylan-kilgore-resume.pdf");

if (!existsSync(join(process.cwd(), ".next"))) {
  console.error(
    "✗ No .next build found in the current directory.\n" +
      "  Run `npm run build` first, then re-run this script.\n" +
      "  (Or use `npm run generate:resume`, which builds then renders.)",
  );
  process.exit(1);
}

async function waitForServer(url, timeoutMs = 30_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.status < 500) return;
    } catch {
      // not ready yet — keep polling
    }
    await wait(500);
  }
  throw new Error(`Server did not respond at ${url} within ${timeoutMs}ms`);
}

async function generate() {
  console.log(`→ Starting Next.js production server on :${PORT}`);
  const server = spawn(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["next", "start", "-p", String(PORT)],
    {
      stdio: ["ignore", "pipe", "pipe"],
      shell: process.platform === "win32",
    },
  );

  let serverLog = "";
  server.stdout?.on("data", (chunk) => (serverLog += chunk.toString()));
  server.stderr?.on("data", (chunk) => (serverLog += chunk.toString()));

  try {
    await waitForServer(`${HOST_URL}/`);
    console.log("→ Server ready. Launching Puppeteer.");

    const browser = await puppeteer.launch({ headless: true });
    try {
      const page = await browser.newPage();
      await page.emulateMediaType("print");
      await page.goto(`${HOST_URL}/resume`, { waitUntil: "networkidle0" });

      // Wait for web fonts to settle so the PDF uses Source Sans 3 + Jost
      // instead of system fallbacks.
      await page.evaluate(() => document.fonts.ready);

      await mkdir(dirname(PDF_PATH), { recursive: true });
      await page.pdf({
        path: PDF_PATH,
        format: "Letter",
        printBackground: true,
        margin: {
          top: "0.5in",
          right: "0.55in",
          bottom: "0.5in",
          left: "0.55in",
        },
        preferCSSPageSize: false,
      });

      console.log(`✓ Wrote ${PDF_PATH}`);
    } finally {
      await browser.close();
    }
  } catch (err) {
    console.error("✗ Resume generation failed.");
    if (serverLog) {
      console.error("--- next start output ---");
      console.error(serverLog);
    }
    throw err;
  } finally {
    server.kill();
  }
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
