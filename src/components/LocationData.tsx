import { unstable_noStore as noStore } from "next/cache";
import { Suspense } from "react";
import { MotionChild, MotionParent } from "./Motion";
import { LocationUpdater } from "./LocationUpdater";
import redis from "@/lib/redis";

interface LocationResponse {
  city: string;
  region: string;
  country: string;
}

const getLastLocation = async () => {
  let location: LocationResponse | null = null;

  location = await redis.get("lastLocation");

  if (!location) {
    location = {
      city: "Amritsar",
      region: "PB",
      country: "IN",
    };
  }

  return location;
};

const getCountryFlag = (countryCode: string) => {
  return countryCode
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
  <>
    <Suspense>
      <MotionParent>
        <MotionChild>
          <LocationData />
        </MotionChild>
      </MotionParent>
    </Suspense>
    <LocationUpdater />
  </>
);
