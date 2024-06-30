/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true
    },
    // 만약 GitHub Pages에서 서브디렉토리에 배포한다면 아래 줄의 주석을 제거하고 적절히 수정하세요
    // basePath: '/your-repo-name',
  }
  
  module.exports = nextConfig