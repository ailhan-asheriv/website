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
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withNextIntl(nextConfig);


