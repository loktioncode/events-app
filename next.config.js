/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'photos.bandsintown.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }

module.exports = nextConfig
