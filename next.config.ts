import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove the 'output: export' line to enable API routes
  images: {
    unoptimized: true,
  },
  // This ensures that static assets like images are properly included in the build
  distDir: 'out',
  // Disable trailing slashes in URLs
  trailingSlash: false,
};

export default nextConfig;
