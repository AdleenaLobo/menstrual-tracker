import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['drizzle-orm', '@neondatabase/serverless', 'pg'],
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const externals = Array.isArray(config.externals) ? config.externals : [];
      config.externals = [...externals, ({ request }: { request: string }, callback: Function) => {
        if (request.startsWith('drizzle-orm')) {
          return callback(null, 'commonjs ' + request);
        }
        callback();
      }];
    }
    return config;
  },
};

export default nextConfig;