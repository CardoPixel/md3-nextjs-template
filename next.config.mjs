/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  images: {
    deviceSizes: [
      360, 375, 390, 393, 412, 414, 810, 1280, 1366, 1440, 1536, 1600, 1920,
      2560,
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack(config, {isServer}) {
    // Optimizations
    config.optimization.minimize = true;
    config.optimization.providedExports = true;
    // Apply the optimization only in production mode
    if (process.env.NODE_ENV === 'production') {
      config.optimization.usedExports = true;
    }
    config.optimization.sideEffects = true;
    config.optimization.chunkIds = 'named';
    config.optimization.splitChunks = {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    };
    config.optimization.moduleIds = 'named';
    config.optimization.mergeDuplicateChunks = true;
    config.optimization.removeEmptyChunks = true;
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );
    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: {not: /url/}, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );
    // Modify the file loader rule to ignore *.svg since we have it handled now
    fileLoaderRule.exclude = /\.svg$/i;

    // Special handling for AWS SDK and Amplify if needed
    if (isServer) {
      // Server-specific configuration
      // Exclude all node dependencies from server-side bundle
      config.externals = [...config.externals];
    }

    return config;
  },
};

export default nextConfig;
