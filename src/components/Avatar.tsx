import Image from "next/image";

const Profile = () => (
  <Image
    src="/profile.png"
    width={110}
    height={110}
    quality={90}
    priority={true}
    alt="Shahbaz Singh"
    className="h-[90px] w-[90px] rounded-full sm:h-[110px] sm:w-[110px]"
  />
);

export const ProfileImage = () => {
  return (
    <div className="w-fit rounded-full shadow-lg grayscale-[30%]">
      <Profile />
    </div>
  );
};
