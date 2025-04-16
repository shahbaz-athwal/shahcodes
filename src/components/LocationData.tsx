import { MotionChild, MotionParent } from "./Motion";
import { LocationUpdater } from "./LocationUpdater";

export interface LocationResponse {
  city: string;
  region: string;
  country: string;
}

const getCountryFlag = (countryCode: string) => {
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    .join("");
};

export const LocationSection = ({ location }: { location: LocationResponse | null }) => {
  if (!location) {
    location = {
      city: "Amritsar",
      region: "PB",
      country: "IN",
    };
  }
  const flag = getCountryFlag(location.country);

  return (
    <>
      <MotionParent>
        <MotionChild>
          <div className="font-mono text-xs text-muted-foreground 2xl:text-sm">
            <div>
              Last Visit: {location.city}, {location.country} {flag}
            </div>
          </div>
        </MotionChild>
      </MotionParent>
      <LocationUpdater />
    </>
  );
};
