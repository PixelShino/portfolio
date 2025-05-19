import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/portfolio' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
