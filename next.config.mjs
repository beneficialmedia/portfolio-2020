import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
  images: {
    // Allow next/image to source publicly available product imagery from
    // pulumi.com (and the Octuple Storybook on github.io). Used by the
    // case-study galleries until self-hosted screenshots are added.
    remotePatterns: [
      { protocol: "https", hostname: "www.pulumi.com" },
      { protocol: "https", hostname: "pulumi.com" },
      { protocol: "https", hostname: "eightfoldai.github.io" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "blogs.windows.com" },
    ],
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
