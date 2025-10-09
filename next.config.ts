import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "", // optional, usually empty
        pathname: "/**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
