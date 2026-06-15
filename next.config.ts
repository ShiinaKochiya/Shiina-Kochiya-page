import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://album.shiinakochiya.space/**')],
  },
};

export default nextConfig;
