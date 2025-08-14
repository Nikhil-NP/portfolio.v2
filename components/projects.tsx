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
            className="min-h-screen flex items-left py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="w-full max-w-6xl">
                
                <div className="text-left mb-12">
                    <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight mb-4 ${inter.className}`}>
                        Projects
                    </h1>
                    <p className={`text-sm sm:text-base md:text-lg text-muted-foreground  mx-auto ${inter.className}`}>
                        Here are some of the projects I&apos;ve built while exploring web development, automation, and problem-solving.
                    </p>
                </div>

                
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* First two projects - side by side on large screens */}
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                    

                </div>
            </div>
        </section>   
    )
}