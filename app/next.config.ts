import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  // images: {
  //   localPatterns: [
  //     { pathname: "/ui/**", search: "" },
  //     { pathname: "/portfolio/**", search: "" },
  //   ],
  // },
};

export default nextConfig;
