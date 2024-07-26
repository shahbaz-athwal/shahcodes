import Image from "next/image";

const Profile = () => (
  <Image
    src='/profile.png'
    width={110}
    height={110}
    quality={99}
    priority={true}
    alt="Shahbaz Singh"
    className="rounded-full"
  />
);

export const ProfileImage = () => {
  return (
    <div className="rounded-full grayscale-[20%] shadow-lg w-fit">
      <Profile />
    </div>
  );
};
