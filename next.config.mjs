/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      ppr: true,
    },
    images: {
      remotePatterns: [{
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
      }]
    }
  }

export default nextConfig;
