import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Page",
  description: "Welcome to my User Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}
