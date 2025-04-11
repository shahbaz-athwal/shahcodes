// import { updateEdgeConfig } from "@/lib/vercel";
import redis from "@/lib/redis";
import type { Activity } from "react-activity-calendar";
import { revalidateTag } from "next/cache";
type GitHubContributionsApiResponse = {
  data: Activity[];
};

export const maxDuration = 60;
export const revalidate = 0;
export const dynamic = "force-dynamic";

export const GET = async (): Promise<Response> => {
  try {
    const response = await fetch("https://github.vineet.pro/api/shahbaz-athwal");

    const data = (await response.json()) as GitHubContributionsApiResponse;

    if (!data.data.length) {
      throw new Error("No contributions found");
    }

    // Size limit on free plan 😭
    // await updateEdgeConfig("github", data.data);
    await redis.set("github", JSON.stringify(data.data));

    revalidateTag("github");

    return new Response(undefined, { status: 204 });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("An unknown error occurred", { status: 500 });
  }
};
