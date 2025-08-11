"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import MaxWidthContainer from "@/components/MaxWidth";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});


export default function Header() {
  return (
    <header className="top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MaxWidthContainer>
        <div className="flex h-16 items-center justify-between">
          <a
            href="/"
            className={`text-3xl  font-bold tracking-tight hover:text-primary transition-colors duration-200 ${geistMono.className}`}
          >
            Nikhil
          </a>

          <ThemeToggle />
        </div>
      </MaxWidthContainer>
    </header>
  );
}
