import { Skeleton } from "./ui/skeleton";

export const RecentlyPlayedSkeleton = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <Skeleton className="w-[408px] sm:w-full mx-10 sm:mx-10 h-64 rounded-lg" />
    </div>
  );
};
