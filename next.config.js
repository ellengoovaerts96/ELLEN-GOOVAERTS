/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    webpackBuildWorker: false
  },
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  reactStrictMode: true,
  devIndicators: false
};

module.exports = nextConfig;
