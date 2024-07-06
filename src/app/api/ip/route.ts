import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const ip = request.headers.get("X-Forwarded-For");
  const city = request.geo?.city || 'not found';
  const country = request.geo?.country;
  const region = request.geo?.region;
  const lat = request.geo?.latitude;
  const long = request.geo?.longitude;

  return Response.json({ ip, city, country, region, lat, long });
}
