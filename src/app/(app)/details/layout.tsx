import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Details",
  description: "What technologies I use? and where I work?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
