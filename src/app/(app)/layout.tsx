import MenuBar from "@/components/MenuBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MenuBar />
      {children}
    </>
  );
}
