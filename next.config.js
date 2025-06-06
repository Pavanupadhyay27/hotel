/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Add CSS handling improvements for development
    if (dev && !isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        aggregateTimeout: 300,
        poll: 1000,
      };
    }
    return config;
  },
};

export default nextConfig;
