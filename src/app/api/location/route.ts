import redis, { getCachedLocationData } from "@/lib/redis";
import { geolocation } from "@vercel/functions";
import { userAgent } from "next/server";
import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
export async function POST(req: NextRequest) {
  try {
    const geo = geolocation(req);

    const country = geo?.country;
    const city = geo?.city;
    const region = geo?.countryRegion;
    const { isBot } = userAgent(req);

    if (!country || !city || !region || isBot) {
      return new Response("Missing location data or bot detected", { status: 400 });
    }

    const locationData = {
      country,
      city,
      region,
    };

    await redis.set("lastLocation", JSON.stringify(locationData));
    revalidateTag("location");
    await getCachedLocationData();

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Error tracking location:", error);
    return new Response("Error tracking location", { status: 500 });
  }
}
