const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./lib/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    const locales = ['en', 'tr'];
    const legacyRoutes = [
      { from: 'platform', to: 'ashmop' },
      { from: 'sim', to: 'ashsim' },
      { from: 'compliance-evidence', to: 'evidence-pack' },
      { from: 'evidence/pack', to: 'evidence-pack' },
    ];

    return legacyRoutes.flatMap(({ from, to }) =>
      locales.map((locale) => ({
        source: `/${locale}/${from}`,
        destination: `/${locale}/${to}`,
        permanent: true,
      }))
    );
  },
  async rewrites() {
    const origin = 'http://142.132.168.47';
    return [
      { source: '/sim', destination: `${origin}:3001/` },
      { source: '/sim/:path*', destination: `${origin}:3001/:path*` },
      { source: '/api/:path*', destination: `${origin}/api/:path*` },
      { source: '/ashmop', destination: `${origin}/ashmop/` },
      { source: '/ashmop/:path*', destination: `${origin}/ashmop/:path*` },
      { source: '/admin', destination: `${origin}/fleetintelligence/admin` },
      { source: '/admin/:path*', destination: `${origin}/fleetintelligence/admin/:path*` },
      { source: '/fleetintelligence/api/:path*', destination: `${origin}/fleetintelligence/api/:path*` },
      { source: '/fleetintelligence', destination: `${origin}/fleetintelligence/` },
      { source: '/fleetintelligence/:path*', destination: `${origin}/fleetintelligence/:path*` },
    ];
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withNextIntl(nextConfig);


