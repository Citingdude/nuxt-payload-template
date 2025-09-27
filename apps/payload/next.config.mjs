import { withPayload } from '@payloadcms/next/withPayload'
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false,
  },
  headers: () => [
    {
      // TODO: think about life and this cors policy
      headers: [
        {
          key: 'Access-Control-Allow-Origin',
          value: '*',
        },
        {
          key: 'Access-Control-Allow-Methods',
          value: 'GET, POST, PUT, DELETE, OPTIONS',
        },
        {
          key: 'Access-Control-Allow-Headers',
          value: 'Content-Type, Authorization',
        },
      ],
      source: '/(.*)',
    },
  ],

  // Your Next.js config here
  output: 'standalone',
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
