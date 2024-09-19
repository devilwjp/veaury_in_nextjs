import VeauryVuePlugin from "veaury/webpack/VeauryVuePlugin.mjs";

/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    config.plugins.unshift(new VeauryVuePlugin({
      isNext: true
    }))
    return config;
  }
};

export default nextConfig;
