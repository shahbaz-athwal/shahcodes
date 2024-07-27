import redis from "@/lib/redis";
import { LocationResponse } from "@/types/locationResponse";
import axios from "axios";
import { unstable_noStore as noStore } from "next/cache";
import { headers } from "next/headers";

const getLastLocation = async () => {
  let response: LocationResponse | null;
  response = await redis.get("lastLocation");
  if (!response || response.status === "fail") {
    response = {
      city: "Wolfville",
      regionName: "Nova Scotia",
      status: "success",
    };
  }
  updateLocation();
  return response;
};

const updateLocation = async () => {
  const ipSource = headers().get("x-forwarded-for") || "localhost";
  const ip = ipSource.split(",")[0].trim();

  const { data } = await axios.get<LocationResponse>(
    `http://ip-api.com/json/${ip}?fields=status,country,city,regionName`
  );

  await Promise.all([
    redis.set("lastLocation", JSON.stringify(data)),
    redis.incr(`Location:${data.city}`),
  ]);
};

export const LocationData = async () => {
  noStore();
  const { city, regionName }: LocationResponse = await getLastLocation();
  return (
    <>
      <div>Last Visit From:</div>
      <div>
        {" "}
        {city}, {regionName}
      </div>
    </>
  );
};
