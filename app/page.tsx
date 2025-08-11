"use client";

import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className ={` min-h-screen p-8 font-mono `}>
      <p>i am nikhil !</p>
      <ThemeToggle/>
    </div>
  );
}