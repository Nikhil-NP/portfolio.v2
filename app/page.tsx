"use client";

import MaxWidthContainer from "@/components/MaxWidth";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import ProjectSection from "@/components/projects";

export default function Home() {
  return (
    <MaxWidthContainer>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </MaxWidthContainer>
    
  );
}