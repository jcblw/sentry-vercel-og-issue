/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sentry: {
    autoInstrumentServerFunctions: false,
  },
};

module.exports = withSentryConfig(nextConfig, {});
