// eslint-disable-next-line @typescript-eslint/no-unused-vars
const removeImports = require('next-remove-imports')();
const path = require('path');

module.exports = removeImports({
  reactStrictMode: true,
  experimental: { esmExternals: true },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['snack-sdk'] = path.resolve(__dirname, '../../../packages/snack-sdk');
    config.resolve.alias['vm2'] = false;
    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});
