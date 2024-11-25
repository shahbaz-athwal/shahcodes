import { Skeleton } from "./ui/skeleton";

export const RecentlyPlayedSkeleton = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <Skeleton className="mx-10 h-64 w-[408px] rounded-lg sm:mx-10 sm:w-full" />
    </div>
  );
};
