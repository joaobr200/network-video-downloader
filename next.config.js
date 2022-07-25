/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  api: {
    responseLimit: "10mb",
  },
};

module.exports = nextConfig;
