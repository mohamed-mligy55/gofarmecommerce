import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Tree-shakes icon barrel imports so only the used icons are bundled.
    optimizePackageImports: [
      "react-icons/pi",
      "react-icons/md",
      "react-icons/fa6",
      "react-icons/tb",
      "react-icons/ri",
      "react-icons/fa",
      "react-icons/io5",
      "react-icons/io",
      "react-icons/ci",
      "react-icons/fi",
      "react-icons/hi",
      "react-icons/ai",
      "lucide-react",
    ],
  },
  images: {
    // The navbar logo is a remote .svg; Next requires this flag to serve SVGs.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
      {
        protocol: "https",
        hostname: "gofarm.reactbd.com",
      },
    ],
  },
};

export default nextConfig;
