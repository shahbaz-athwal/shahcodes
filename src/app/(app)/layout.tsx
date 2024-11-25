import MenuBar from "@/components/MenuBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="shadow-surface-glass mx-auto my-2 w-fit place-content-center rounded-2xl px-2 py-2 backdrop-blur sm:px-4 [@supports(backdrop-filter:blur(0px))]:bg-black/[6%] dark:[@supports(backdrop-filter:blur(0px))]:bg-white/[3%]">
        <MenuBar />
      </div>
      {children}
    </>
  );
}
