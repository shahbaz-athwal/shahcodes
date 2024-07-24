import Image from "next/image";

const Profile = () => (
  <Image
    src='/profile.png'
    width={110}
    height={110}
    quality={90}
    priority={true}
    alt="Shahbaz Singh"
  />
);

export const ProfileImage = () => {
  return (
    <div className="rounded-full grayscale-[40%] shadow-lg w-fit">
      <Profile />
    </div>
  );
};
