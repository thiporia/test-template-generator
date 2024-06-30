/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProduction ? '/test-template-generator' : '/',
}

module.exports = nextConfig