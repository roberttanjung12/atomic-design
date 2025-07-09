/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['mui-color-input'],
  webpack(config) {
    config.module.rules.push({
      resourceQuery: /raw/,
      use: 'raw-loader'
    });

    return config;
  }
};

export default nextConfig;
