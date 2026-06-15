import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server bundle for smbCloud nextjs-ssr deploys.
  output: "standalone",
};

export default nextConfig;
