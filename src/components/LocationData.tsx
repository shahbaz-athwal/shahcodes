import { unstable_noStore as noStore } from "next/cache";
import { Suspense } from "react";
import { MotionChild, MotionParent } from "./Motion";
import { LocationUpdater } from "./LocationUpdater";

interface LocationResponse {
  city: string;
  region: string;
  country: string;
  isBot: boolean;
  timestamp?: string;
}

const getLastLocation = async () => {
  let response: LocationResponse | null = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/location`);
    response = await res.json();
  } catch (error) {
    console.error("Error fetching location:", error);
  }

  if (!response) {
    response = {
      city: "Amritsar",
      region: "PB",
      country: "IN",
      isBot: false,
    };
  }

  return response;
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
