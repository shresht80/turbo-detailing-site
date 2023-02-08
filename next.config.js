/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap.js");
    }

    return config;
  },
};

module.exports = nextConfig;
