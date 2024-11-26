import { NextRequest, NextResponse, userAgent } from "next/server";

import { geolocation } from "@vercel/functions";

export const config = {
  matcher: "/",
};

export async function middleware(req: NextRequest) {
  const { nextUrl: url } = req;

  const geo = geolocation(req);

  const country = geo?.country || "CA";
  const city = geo?.city || "Kentville";
  const region = geo?.countryRegion || "NS";
  const { isBot } = userAgent(req);

  url.searchParams.set("country", country);
  url.searchParams.set("city", city);
  url.searchParams.set("region", region);
  url.searchParams.set("isBot", isBot.toString());

  return NextResponse.rewrite(url);
}
