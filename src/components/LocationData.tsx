import redis from "@/lib/redis";
import { getRequestContext, type LocationResponse } from "@/lib/requestMetadata";

const getLastLocation = async () => {
  let response: LocationResponse | null;
  response = await redis.get("lastLocation");
  if (!response) {
    response = {
      city: "Wolfville",
      region: "NS",
      country: "CA",
      isBot: "false",
    };
  }
  updateLocation();
  return response;
};

const updateLocation = async () => {
  const data = getRequestContext();
  if (data.isBot === "false") {
    await redis.set("lastLocation", JSON.stringify(data));
  }
};

export const LocationData = async () => {
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
