"use client";

import dynamic from 'next/dynamic';
import MaxWidthContainer from "@/components/MaxWidth";
import HeroSection from "@/components/hero";
const ProjectSection = dynamic(() => import('@/components/projects'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});

const AboutSection = dynamic(() => import('@/components/about'));


export default function Home() {
  return (
    <MaxWidthContainer>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </MaxWidthContainer>
    
  );
}