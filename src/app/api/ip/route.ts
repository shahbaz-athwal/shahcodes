import { NextRequest } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const ip = '152.59.82.64' //request.headers.get("X-Forwarded-For");
  try {
    const { data } = await axios.get(
      `http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,timezone,query`
    );
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false }, { status: 400 });
  }
}
