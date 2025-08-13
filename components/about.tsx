"use client";

import { personalInfo, education } from "@/lib/constants";
import { Inter } from "next/font/google";
import { GraduationCap } from "lucide-react";
import Image from "next/image";


const inter = Inter({
  subsets: ["latin"],
});

export default function AboutSection() {
  return (
    <section
        id="about"
        className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8"
    >
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 items-center max-w-6xl w-full">       
                {/* Text */}
                <div className="flex flex-col space-y-6 sm:space-y-7 text-left">
                {/* Section Header */}
                <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight ${inter.className}`}>
                    About Me
                </h1>
                {/* Main Description */}
                <p className={`text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed ${inter.className}`}>
                    I'm a CSE grad who enjoys building web apps to solve real-world problems. I also love creating tools — whether it's automation, scraping, or anything that saves time and effort.
                </p>
                <p className={`text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed ${inter.className}`}>
                    Right now, I'm exploring web development, cloud, and DevOps, while staying tuned into daily tech trends.
                </p>
                {/* Education */}
                <div className="bg-accent/30 border border-border/50 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                        <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                        <p className={`text-sm font-medium text-foreground ${inter.className}`}>
                        {education.degree}
                        </p>
                        <p className={`text-xs text-muted-foreground ${inter.className}`}>
                        {education.institution} • {education.duration}
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                {/* Image */}
                <div className="w-69 h-69 sm:w-70 sm:h-70 bg-muted/20 border border-border  flex items-center justify-center rounded-full overflow-hidden">
                {personalInfo.image && personalInfo.image !== "to be added" ? (
                    <Image 
                    src={personalInfo.image} 
                    alt="Nikhil Purohit"
                    width={192}
                    height={192}
                    
                    className="w-full h-full object-cover"
                    />
                ) : (
                    <span className={`text-xl sm:text-2xl font-bold text-muted-foreground ${inter.className}`}>
                    N
                    </span>
                )}
                </div>
        </div>
    </section>

  );
}