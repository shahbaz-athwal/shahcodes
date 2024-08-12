import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me for any queries or collaborations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
