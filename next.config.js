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
      // /ashsim and /sim → middleware.ts (Clear-Site-Data + 308 to ashsim host).
      // Do NOT also list them in vercel.json redirects — those run before middleware
      // and would skip SW/cache wipe for legacy www-scoped PWAs.
      // Do NOT match /en/ashsim or /tr/ashsim (marketing product pages on www).
      // Shipyard Twin deep links → AshSIM host (avoid www /ashsim hop)
      { source: '/dashboard/yard', destination: `${ASHSIM_ORIGIN}/ashsim/`, permanent: false },
      { source: '/dashboard/yard/:path*', destination: `${ASHSIM_ORIGIN}/ashsim/:path*`, permanent: false },
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
