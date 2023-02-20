const path = require('path');

module.exports = {
  reactStrictMode: true,
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
};
