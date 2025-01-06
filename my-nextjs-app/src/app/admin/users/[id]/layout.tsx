import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Detail",
  description: "Welcome to my User Detail",
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
