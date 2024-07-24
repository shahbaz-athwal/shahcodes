import { recentlyPlayed } from "@/app/actions/recentlyPlayed";
import RecentlyPlayed from "@/components/RecentlyPlayed";
import { revalidatePath } from "next/cache";

export default async function RenderedRecentlyPlayed() {

    const data = await recentlyPlayed();
    revalidatePath('/')
    
    return (
      <>
        <RecentlyPlayed recentPlays={data} />
      </> 
    );
  }
