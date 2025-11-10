"use client";

import { personalInfo, socialLinks } from "@/lib/constants";
import { Github, Linkedin, Mail } from "lucide-react";
import TwitterIcon from "./xIcon";
import { Inter } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const inter = Inter({
  subsets: ["latin"],
});

const rotatingSubtitles = personalInfo.rotatingSubTitle;


export default function HeroSection() {

  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentSubtitle((prev) => (prev + 1) % rotatingSubtitles.length);
        setIsVisible(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);



  const socialIcons = [
    { href: socialLinks.github, icon: Github, label: "GitHub" },
    { href: socialLinks.x, icon: TwitterIcon, label: "Twitter" },
    { href: socialLinks.linkedIn, icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${socialLinks.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex items-center"
    >
      
      <section className="min-h-screen flex items-center justify-start py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start text-left space-y-4 sm:space-y-6 w-full">
         
          <p className={`text-sm md:text-base text-muted-foreground ${inter.className}`}>
            {personalInfo.greetings}
          </p>

          {/* Title and Subtitle Group - Closer Together */}
          <div className="flex flex-col space-y-1 sm:space-y-2">
            {/* Main Title */}
            <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-none ${inter.className}`}>
              {personalInfo.name}
            </h1>

            
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight bg-gradient-to-r from-foreground/70 to-muted-foreground/50 bg-clip-text text-transparent leading-tight ${inter.className}`}>
              {rotatingSubtitles[currentSubtitle]}
            </h2>
          </div>

          <p className={`text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed ${inter.className}`}>
            {personalInfo.description}
          </p>

          
          <div className="flex items-center space-x-3 py-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className={`text-sm sm:text-base md:text-lg font-medium bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent ${inter.className}`}>
              Open to opportunities
            </p>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-green-500 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-green-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-1 h-1 bg-green-500 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-3 sm:space-y-4 ">
            <div className="flex items-center space-x-4 sm:space-x-6">
              {socialIcons.map((social) => {
                const IconComponent = social.icon;
                // For external links and mailto, using regular anchor tags
                if (social.href.startsWith('http') || social.href.startsWith('mailto:')) {
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-accent hover:text-primary transition-all duration-200 hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                  );
                }
                
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-full hover:bg-accent hover:text-primary transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
    </section>
    </motion.section>
    
  );
}
