import redis from "@/lib/redis";
import crypto from "crypto";
import { headers } from "next/headers";

async function recordVisitCount() {
  const headersList = headers();
  
  const ipSource = headersList.get("x-forwarded-for") || 'localhost';

  const ip = ipSource.split(",")[0].trim();

  const hashedIp = crypto.createHash("sha256").update(ip).digest("hex");

  const viewKey = 'totalVisits'
  // const ipViewKey = ["ip", hashedIp].join(":");
  const ipViewKey = ["ip", ip].join(":"); //DEV ONLY

  const hasVisited = await redis.get(ipViewKey);

  let visitCount: number;

  if (!hasVisited) {
    const pipeline = redis.pipeline();
    pipeline.incr(viewKey);
    pipeline.set(ipViewKey, "1");
    await pipeline.exec();

    visitCount = (await redis.get<number>(viewKey)) ?? 0;
    return { message: "Visit Added", status: 202, visits: visitCount };
  } else {
    visitCount = (await redis.get<number>(viewKey)) ?? 0;
    return { message: "Already visited", status: 200, visits: visitCount };
  }
}

const TotalViews = async () => {
  const { visits } = await recordVisitCount();

  return <div>Total Visiters: {visits}</div>;
};

export default TotalViews;