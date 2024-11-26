import redis from "@/lib/redis";
import { type LocationResponse } from "@/lib/requestMetadata";
import { unstable_noStore as noStore } from "next/cache";

const getLastLocation = async () => {
  let response: LocationResponse | null;
  response = await redis.get("lastLocation");
  if (!response) {
    response = {
      city: "Amritsar",
      region: "PB",
      country: "IN ",
      isBot: false,
    };
  }
  updateLocation();
  return response;
};

const updateLocation = async () => {
  const data: LocationResponse | null = await redis.get("currentLocation");
  console.log(data);
  if (data?.isBot === false) {
    await redis.set("lastLocation", JSON.stringify(data));
  }
};

export const LocationData = async () => {
  noStore();
  const { city, region, country } = await getLastLocation();
  return (
    <div className="text-muted-foreground">
      <div>Last Visit From:</div>
      <div>
        {" "}
        {city}, {region}, {country}
      </div>
    </div>
  );
};
