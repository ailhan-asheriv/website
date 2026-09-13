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
 * Do not serve AshSIM from www. A 308 (and meta refresh) lose the URL hash
 * in some clients (register → accept-invite JWT lives in location.hash).
 * Bounce with JS so the hash is appended on the real host. No automatic
 * fallback: a meta refresh races JS and wins without the fragment. No-JS
 * browsers get a manual link (query only; hash is never sent to the server).
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
  <title>AshSIM</title>
  <script>
    (function () {
      var path = location.pathname.replace(/^\\/sim(?=\\/|$)/, "/ashsim");
      if (path === "/ashsim" || path === "/sim") path = "/ashsim/";
      var dest = ${JSON.stringify(ASHSIM_ORIGIN)} + path + location.search + location.hash;
      var a = document.getElementById("continue");
      if (a) a.setAttribute("href", dest);
      location.replace(dest);
    })();
  </script>
</head>
<body style="font-family:system-ui,sans-serif;padding:24px;color:#111827">
  <p>Opening AshSIM…</p>
  <p><a id="continue" href="${safeDest}">Continue to AshSIM</a></p>
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
