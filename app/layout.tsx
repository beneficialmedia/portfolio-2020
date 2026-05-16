import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Jost } from "next/font/google";

import "./globals.css";
import { profile } from "@/content/profile";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Menu } from "@/components/menu/Menu";
import { Footer } from "@/components/Footer";
import { SectionAccent } from "@/components/SectionAccent";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.meta.siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.meta.description,
  keywords: profile.meta.keywords,
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.title}`,
    description: profile.meta.description,
    url: profile.meta.siteUrl,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.meta.description,
    creator: profile.social.twitter ? `@${profile.social.twitter}` : undefined,
  },
  authors: [{ name: profile.name, url: profile.meta.siteUrl }],
  creator: profile.name,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sourceSans.variable} ${jost.variable}`}
    >
      <body className="min-h-screen">
        <ThemeProvider>
          <SectionAccent />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-[var(--bg-elevated)] focus:px-3 focus:py-2 focus:text-sm focus:outline-2 focus:outline-[var(--section-accent)] print:hidden"
          >
            Skip to content
          </a>
          <Menu />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
