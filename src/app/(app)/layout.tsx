import FloatingNavbar from "@/components/FloatingNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="sticky top-6 z-30 -mx-px">
        <FloatingNavbar />
      </div>
      {children}
    </>
  );
}
