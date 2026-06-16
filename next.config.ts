import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/Cosmiclean',
  assetPrefix: '/Cosmiclean/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
