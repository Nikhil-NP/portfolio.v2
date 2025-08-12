"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import MaxWidthContainer from "@/components/MaxWidth";
import { Inter } from "next/font/google";
import { NavItems } from "@/lib/types";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { resumeLink } from "@/lib/constants";
const inter = Inter({
  subsets: ["latin"],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItems[] = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () =>{
    setIsMenuOpen(false)
  }

  return (
    <header className="top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MaxWidthContainer>
        <div className="flex h-16 items-center justify-between">
          <a
            href="/"
            className={`text-3xl font-bold tracking-tight hover:text-primary transition-colors duration-200 ${inter.className}`}
          >
            /\/
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-1g font-medium hover:text-primary transition-colors duration-200 ${inter.className}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/*mobile navigation implemented */}
            <button
              className="md:hidden p-2 hover:big-accent rounded-md transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                < X className="h-5 w-5" />
                ) : (
                <Menu className="h-5 w-5"/>
                )}
            </button>
           <Button
                variant="outline"
                size="sm"
                > <nav>
                   <a 
                    href={`${resumeLink}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                  Résumé
                  </a>
                </nav>
                  
              
           </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* mobile navigation menu */}
        { isMenuOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-4 space-y-1 bg-background border-t">
              {navItems.map((item) =>(
                <a 
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block px-3 py-2 text-base font-medium hover:text-primary hover:bg-accent rounded-md transition-colors duration-200 ${inter.className}`}
                >
                    {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}


      </MaxWidthContainer>
    </header>
  );
}