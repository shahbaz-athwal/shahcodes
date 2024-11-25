import Image from "next/image";

const Profile = () => (
  <Image
    src="/profile.png"
    width={110}
    height={110}
    quality={90}
    priority={true}
    alt="Shahbaz Singh"
    className="h-[70px] w-[70px] rounded-full sm:h-[90px] sm:w-[90px]"
  />
);

export const ProfileImage = () => {
  return (
    <div className="w-fit rounded-full shadow-lg grayscale-[35%]">
      <Profile />
    </div>
  );
};
