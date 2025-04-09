import redis from "@/lib/redis";
import { unstable_noStore as noStore } from "next/cache";
import { Suspense } from "react";
import { MotionChild, MotionParent } from "./Motion";

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
      country: "IN",
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

const getCountryFlag = (countryCode: string) => {
  const code = countryCode.trim();
  return code
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    .join("");
};

const LocationData = async () => {
  noStore();
  const { city, country } = await getLastLocation();
  const flag = getCountryFlag(country);

  return (
    <div className="font-mono text-sm text-muted-foreground">
      <div>
        Last Visit: {city}, {country} {flag}
      </div>
    </div>
  );
};

export const LocationSection = () => (
  <Suspense>
    <MotionParent>
      <MotionChild>
        <LocationData />
      </MotionChild>
    </MotionParent>
  </Suspense>
);
