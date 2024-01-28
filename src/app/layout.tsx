import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Advent_Pro } from "next/font/google";
import "./globals.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

const spectral = Advent_Pro({
  weight: ["600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function SideMenu() {
  return (
    <div className="pb-12 w-1/4">
      <div className="space-y-4 py-4">
        <div
          className="
        pr-3
         py-2"
        >
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            İdarə paneli
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-2 h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>
              Qalereya
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              Albomlar
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-2 h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              Favorilər
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={openSans.className}>
        <div className="border-b">
          <div className="flex h-16 items-center px-4 container mx-auto">
            <h1
              className={`${spectral.className} flex h-16 items-center px-4 container mx-auto text-2xl font-bold tracking-tight`}
            >
              {" "}
              Şəkilçi
            </h1>

            <div className="ml-auto flex items-center space-x-4">
              <a
                href="https://github.com/ilkinsufi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github🔗
              </a>
              <a href="">
                <Avatar>
                  <AvatarImage src="https://www.ilkinsufi.com/_next/image?url=%2Fstatic%2Fimages%2Favatar.webp&w=1080&q=75" />
                  <AvatarFallback>ISM</AvatarFallback>
                </Avatar>
              </a>
            </div>
          </div>
        </div>

        <div className="flex container mx-auto">
          <SideMenu />
          <div className="w-full px-4 pt-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
