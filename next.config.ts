import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['dribbble.com', 'unsplash.com', 'cdn.dribbble.com'],
  },
};

export default nextConfig;
