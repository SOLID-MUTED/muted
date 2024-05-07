import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Avatar from "./components/Avatar/Avatar";
import { BiTargetLock } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muted - See Noise Around You",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex m-4 justify-between">
          <Avatar />
          <Search />
        </div>
        <div className="avatar placeholder flex justify-end bottom-0 mx-4 items-end">
          <div className="bg-neutral text-neutral-content rounded-full w-12">
            <span className="text-3xl">
              <BiTargetLock />
            </span>
          </div>
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
