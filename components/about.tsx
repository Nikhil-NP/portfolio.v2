"use client";

import { personalInfo, education } from "@/lib/constants";
import { Inter } from "next/font/google";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import TechStack from "./tech";


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
                

                <div className="flex flex-col space-y-6 sm:space-y-7 text-left">
                

                <h1 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 ${inter.className}`}>
                        About{" "}
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Me
                        </span>
                </h1>
                
                <div className="space-y-4">
                        <p className={`text-base sm:text-lg text-muted-foreground leading-relaxed ${inter.className}`}>
                            I&apos;m a <span className="text-foreground font-medium">CSE Senior</span> who enjoys building web apps to solve real-world problems. I also love creating{" "}
                            <span className="text-foreground font-medium">tools</span> — whether it&apos;s automation, scraping, or anything that saves time and effort.
                        </p>
                        <p className={`text-base sm:text-lg text-muted-foreground leading-relaxed ${inter.className}`}>
                            Right now, I&apos;m exploring{" "}
                            <span className="text-foreground font-medium">web development</span>,{" "}
                            <span className="text-foreground font-medium">cloud</span>, and{" "}
                            <span className="text-foreground font-medium">DevOps</span>, while staying tuned into daily tech trends.
                        </p>
                    </div>

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
            
            <TechStack />
        </div>
    </section>

  );
}