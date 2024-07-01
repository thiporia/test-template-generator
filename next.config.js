/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
    path: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}`,
  },
  trailingSlash: true, // GitHub Pages에서 필요할 수 있습니다.
}

module.exports = nextConfig