/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tanten_tulk',
  trailingSlash: true, 
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig

