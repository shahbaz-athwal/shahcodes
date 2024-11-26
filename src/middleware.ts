import { NextRequest, NextResponse, userAgent } from "next/server";

import { geolocation } from "@vercel/functions";
import redis from "./lib/redis";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {

    const geo = geolocation(req);

    const country = geo?.country || "CA";
    const city = geo?.city || "Kentville";
    const region = geo?.countryRegion || "NS";
    const { isBot } = userAgent(req);

    await redis.set(
      "currentLocation",
      JSON.stringify({
        country,
        city,
        region,
        isBot,
      }),
    );

    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
