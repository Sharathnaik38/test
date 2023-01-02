/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true
      },
      {
        source: '/claims/detail',
        destination: '/claims/detail/quick-view',
        permanent: true
      }
    ]
  },
}

module.exports = nextConfig
