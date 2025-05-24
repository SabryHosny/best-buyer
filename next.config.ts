import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Disable trailing slashes in URLs
  trailingSlash: false,
};

export default nextConfig;
