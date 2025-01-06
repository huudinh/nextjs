import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'; 
import Header from "../components/Header";
import { Container } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to my HomePage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body className={inter.className}>
      <Container>
        <Header />
        {children}
      </Container>
      </body>
    </html>
  );
}
