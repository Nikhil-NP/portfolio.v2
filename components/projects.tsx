"use client"

import {projects} from "../lib/constants"
import { Inter } from "next/font/google"
import ProjectCard from "./ProjectCard"

const inter = Inter({
    subsets:["latin"],
})

export default function ProjectSection(){
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="w-full max-w-6xl mx-auto">
                
                {/* Section Header with better framing */}
                <div className="mb-16">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-[2px] bg-primary mr-4"></div>
                        <span className={`text-sm font-medium text-primary tracking-wider uppercase ${inter.className}`}>
                            Portfolio
                        </span>
                    </div>
                    
                    <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 ${inter.className}`}>
                        Featured{" "}
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>
                    
                    <div className="max-w-2xl">
                        <p className={`text-base sm:text-lg text-muted-foreground leading-relaxed ${inter.className}`}>
                            A collection of projects that showcase my journey in{" "}
                            <span className="text-foreground font-medium">web development</span>,{" "}
                            <span className="text-foreground font-medium">automation</span>, and{" "}
                            <span className="text-foreground font-medium">problem-solving</span>.
                        </p>
                    </div>
                </div>

                {/* Projects Grid with improved spacing */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                    
                    {/* Empty space with subtle indicator */}
                    <div className="hidden lg:flex items-center justify-center">
                        <div className="flex flex-col items-center space-y-4 opacity-30">
                            <div className="w-16 h-16 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center">
                                <span className={`text-m text-muted-foreground font-medium ${inter.className}`}>
                                    More
                                </span>
                            </div>
                            <p className={`text-xs text-muted-foreground ${inter.className}`}>
                                Coming Soon
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom accent */}
                <div className="mt-16 flex justify-center">
                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
                </div>
            </div>
        </section>   
    )
}