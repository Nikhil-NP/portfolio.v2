"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import MaxWidthContainer from "@/components/MaxWidth";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";

export default function Home() {
  return (
    <MaxWidthContainer>
      <HeroSection />
      <AboutSection />
    </MaxWidthContainer>
    
  );
}