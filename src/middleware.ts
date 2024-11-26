import { NextRequest, NextResponse, userAgent } from "next/server";

import { geolocation } from "@vercel/functions";


export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    console.log("middleware invoked")
    const { nextUrl: url } = req;

    const geo = geolocation(req);
    console.log("geo:", geo);

    const country = geo?.country || "CA";
    const city = geo?.city || "Kentville";
    const region = geo?.countryRegion || "NS";
    const { isBot } = userAgent(req);

    url.searchParams.set("country", country);
    url.searchParams.set("city", city);
    url.searchParams.set("region", region);
    url.searchParams.set("isBot", isBot.toString());
    console.log(url)

    return NextResponse.rewrite(url);
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
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}