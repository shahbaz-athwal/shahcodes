import { recentlyPlayed } from "@/app/actions/recentlyPlayed";
import RecentlyPlayed from "@/components/RecentlyPlayed";
import { unstable_noStore as noStore } from "next/cache";

export default async function RenderedRecentlyPlayed() {
  noStore();
  const data = await recentlyPlayed();

  return (
    <>
      <RecentlyPlayed recentPlays={data} />
    </>
  );
}
