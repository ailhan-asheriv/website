const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./lib/i18n.ts');

const ASHSIM_ORIGIN = 'https://ashsim.asheriv.com';

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

    return [
      // Product SPA lives on ashsim.asheriv.com — permanent redirect (308), not proxy.
      // Do NOT match /en/ashsim or /tr/ashsim (marketing product pages on www).
      { source: '/ashsim', destination: `${ASHSIM_ORIGIN}/ashsim/`, permanent: true },
      { source: '/ashsim/:path*', destination: `${ASHSIM_ORIGIN}/ashsim/:path*`, permanent: true },
      // Shipyard Twin deep links → AshSIM host (avoid www /ashsim hop)
      { source: '/dashboard/yard', destination: `${ASHSIM_ORIGIN}/ashsim/`, permanent: false },
      { source: '/dashboard/yard/:path*', destination: `${ASHSIM_ORIGIN}/ashsim/:path*`, permanent: false },
      { source: '/sim', destination: `${ASHSIM_ORIGIN}/ashsim/`, permanent: true },
      { source: '/sim/:path*', destination: `${ASHSIM_ORIGIN}/ashsim/:path*`, permanent: true },
      ...legacyRoutes.flatMap(({ from, to }) =>
        locales.map((locale) => ({
          source: `/${locale}/${from}`,
          destination: `/${locale}/${to}`,
          permanent: true,
        }))
      ),
    ];
  },
  async rewrites() {
    const origin = 'http://142.132.168.47';
    return [
      // Central auth SPA (asheriv-auth on Hetzner)
      { source: '/auth', destination: `${origin}/auth/` },
      { source: '/auth/:path*', destination: `${origin}/auth/:path*` },
      { source: '/.well-known/jwks.json', destination: `${origin}/.well-known/jwks.json` },
      // Phase D / Phase C residuals — marketing edge → Hetzner origin
      { source: '/tools/fueleu', destination: `${origin}/tools/fueleu/` },
      { source: '/tools/fueleu/:path*', destination: `${origin}/tools/fueleu/:path*` },
      { source: '/dashboard', destination: `${origin}/dashboard` },
      { source: '/dashboard/:path*', destination: `${origin}/dashboard/:path*` },
      // /ashsim* rewrites removed — Vercel edge could not reach origin (:3001/:8009).
      // Traffic redirects to https://ashsim.asheriv.com/ashsim/ (see redirects()).
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
