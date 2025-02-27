import Image from "next/image";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";

export const ProfileImage = ({ className }: { className?: string }) => {
  return (
    <div className="w-fit rounded-full shadow-lg grayscale-[35%]">
      <Link href="/">
        <Image
          src="/profile.png"
          width={110}
          height={110}
          quality={90}
          priority={true}
          alt="Shahbaz Singh"
          className={cn("h-[70px] w-[70px] rounded-full sm:h-[90px] sm:w-[90px]", className)}
        />
      </Link>
    </div>
  );
};
