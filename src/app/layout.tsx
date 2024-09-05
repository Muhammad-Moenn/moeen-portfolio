import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairsTransition from "@/components/StairsTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MMFD Portfolio",
  description: "create by Muhammad Moeen ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      
      <body className="bg-gray-950 text-white font-Roboto Condensed">
        {/* <PageTransition> */}
          <StairsTransition/>

          <Header />
          {children}
        {/* </PageTransition> */}
      </body>
    </html>
  );
}
