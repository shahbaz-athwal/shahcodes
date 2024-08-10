import Image from "next/image";

const Profile = () => (
  <Image
    src='/profile.png'
    width={110}
    height={110}
    quality={90}
    priority={true}
    alt="Shahbaz Singh"
    className="rounded-full w-[90px] h-[90px] sm:w-[110px] sm:h-[110px]"
  />
);

export const ProfileImage = () => {
  return (
    <div className="rounded-full grayscale-[30%] shadow-lg w-fit">
      <Profile />
    </div>
  );
};
