import { Redis } from "@upstash/redis";
import { unstable_cache as cache } from "next/cache";
import type { Activity } from "react-activity-calendar";
import type { LocationResponse } from "@/components/LocationData";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL as string,
  token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
});

export const getCachedGithubData = cache(
  async () => {
    return (await redis.get("github")) as Activity[] | null;
  },
  ["github-data"],
  { tags: ["github"] },
);

export const getCachedLocationData = cache(
  async () => {
    return (await redis.get("lastLocation")) as LocationResponse | null;
  },
  ["location-data"],
  { tags: ["location"] },
);

export default redis;
