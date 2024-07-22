import { recentlyPlayed } from "@/app/actions/recentlyPlayed";
import RecentlyPlayed from "@/components/RecentlyPlayed";

export default async function RenderedRecentlyPlayed() {

    const data = await recentlyPlayed();
  
    return (
      <>
        <RecentlyPlayed recentPlays={data} />
      </> 
    );
  }