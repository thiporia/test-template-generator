/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'test-template-generator'; // GitHub 저장소 이름으로 변경하세요

const nextConfig = {
  assetPrefix: isProduction ? `/${repoName}/` : '/',
  basePath: isProduction ? `/${repoName}` : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig