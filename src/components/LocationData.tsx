import redis from "@/lib/redis";
import { unstable_noStore as noStore } from "next/cache";

interface LocationResponse {
  city: string;
  region: string;
  country: string;
  isBot: boolean;
}

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
