"use client"

import { Inter } from "next/font/google";
import MaxWidthContainer from "./MaxWidth";
import { Github, Heart, Copyright } from "lucide-react";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
});

export default function Footer(){
    return(
        <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
            <MaxWidthContainer>
                <div className="py-4">
                    
                    <div className="flex justify-center mb-3">
                        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
                    </div>
                    
                    
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        
                        <div className="flex items-center space-x-1">
                            <span className={`text-sm text-muted-foreground ${inter.className}`}>
                                Made with
                            </span>
                            <Heart className="h-4 w-4 text-red-500 fill-current" />
                            <span className={`text-sm text-muted-foreground ${inter.className}`}>
                                by
                            </span>
                            <span className={`text-sm font-medium text-foreground hover:text-primary transition-colors ${inter.className}`}>
                                Nikhil
                            </span>
                        </div>

                        {/* Right side - Social links */}
                        <div className="flex items-center space-x-4">
                            <Link
                                href={"https://github.com/Nikhil-NP/portfolio.v2"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                    
                    
                    <div className="mt-6 pt-4 border-t border-border/30">
                        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                                <Copyright className="h-3 w-3" />
                                <span className={inter.className}>
                                    {new Date().getFullYear()} Nikhil Purohit. All rights reserved.
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </MaxWidthContainer>
        </footer>
    )
}