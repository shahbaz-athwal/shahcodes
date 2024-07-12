import redis from "@/lib/redis";
import axios from "axios";
import { headers } from "next/headers";

const getLastLocation = async () => {
  const response = await redis.get("lastLocation");
  updateLocation();
  return response;
};

const updateLocation = async () => {
  const ipSource = headers().get("x-forwarded-for") || "localhost";
  const ip = ipSource.split(",")[0].trim();

  const { data } = await axios.get(
    `http://ip-api.com/json/${ip}?fields=status,country,city,regionName`
  );

  await Promise.all([
    redis.set("lastLocation", JSON.stringify(data)),
    redis.set(`Location:${ip}`, JSON.stringify(data)),
  ]);
};

export const LocationData = async () => {
  const { city, regionName }: any = await getLastLocation();
  return (
    <>
    <div>Last Visit From:</div>
    <div>
     {" "} {city}, {regionName}
    </div>
    </>
  );
};
