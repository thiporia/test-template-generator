/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/test-template-generator',
    assetPrefix: '/test-template-generator/',
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig