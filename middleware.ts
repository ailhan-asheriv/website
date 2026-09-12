import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { routing } from "./lib/routing";

const intlMiddleware = createMiddleware(routing);

const ASHSIM_ORIGIN = "https://ashsim.asheriv.com";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Do not serve AshSIM from www. A 308 loses the URL hash in some clients
 * (embedded browsers, hash-routed register → accept-invite). Bounce with a
 * tiny HTML page so location.hash is appended on the real host, and wipe any
 * leftover www-scoped SW/cache that used to host the SPA copy.
 */
function redirectAshsim(req: NextRequest, pathname: string) {
  const targetPath =
    pathname === "/ashsim" || pathname === "/sim" ? "/ashsim/" : pathname.replace(/^\/sim/, "/ashsim");
  const dest = `${ASHSIM_ORIGIN}${targetPath}${req.nextUrl.search}`;
  const safeDest = escapeHtml(dest);
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0;url=${safeDest}">
  <title>AshSIM</title>
  <script>
    (function () {
      var path = location.pathname.replace(/^\\/sim(?=\\/|$)/, "/ashsim");
      if (path === "/ashsim" || path === "/sim") path = "/ashsim/";
      location.replace(${JSON.stringify(ASHSIM_ORIGIN)} + path + location.search + location.hash);
    })();
  </script>
</head>
<body style="font-family:system-ui,sans-serif;padding:24px;color:#111827">
  <p>Opening AshSIM…</p>
  <p><a href="${safeDest}">Continue to AshSIM</a></p>
</body>
</html>`;
  return new NextResponse(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "clear-site-data": '"cache", "storage"',
      "x-ashsim-redirect": "hash-bounce",
    },
  });
}

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/ashsim" || pathname.startsWith("/ashsim/")) {
    return redirectAshsim(req, pathname);
  }
  if (pathname === "/sim" || pathname.startsWith("/sim/")) {
    return redirectAshsim(req, pathname);
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(tr|en)/:path*", "/ashsim", "/ashsim/:path*", "/sim", "/sim/:path*"],
};
