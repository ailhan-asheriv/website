import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { routing } from "./lib/routing";

const intlMiddleware = createMiddleware(routing);

const ASHSIM_ORIGIN = "https://ashsim.asheriv.com";

/**
 * Kill legacy www-scoped AshSIM service workers / caches, then hard-redirect
 * to ashsim.asheriv.com. Stale www SW was serving the SPA from www origin →
 * web-ifc.wasm followed a cross-origin redirect and died on CORS.
 */
function redirectAshsim(req: NextRequest, pathname: string) {
  const targetPath = pathname === "/ashsim" || pathname === "/sim" ? "/ashsim/" : pathname.replace(/^\/sim/, "/ashsim");
  const dest = `${ASHSIM_ORIGIN}${targetPath}${req.nextUrl.search}`;
  const res = NextResponse.redirect(dest, 308);
  res.headers.set("Clear-Site-Data", '"cache", "storage"');
  res.headers.set("Cache-Control", "no-store");
  return res;
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
