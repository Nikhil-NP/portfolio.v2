import { Card, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Projects } from "@/lib/types";

const inter = Inter({
    subsets:["latin"],
})

export default function ProjectCard( { project }:{project:Projects}  ){
    return (
        <Card className="bg-accent/20 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg group">
            <CardContent className="p-6">
                
                {project.image && (
                    <div className="w-full h-48 bg-muted/20 border border-border/30 rounded-lg mb-4 overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />  
                    </div>
                )}

                <h3 className={`text-l font-bold text-foreground mb-3 group-hover:text-primary transition-colors ${inter.className}`}>
                        {project.title}
                </h3>
                
               
                
                <p className={`text-sm text-muted-foreground leading-relaxed mb-4 ${inter.className}`}>
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                        <Badge 
                            key={index} 
                            variant="secondary" 
                            className="text-xs bg-background/50 hover:bg-background border-border/50"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="flex items-center space-x-3">
                
                    <Button variant="outline" size="sm" asChild>
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3 " />
                            
                        </Link>
                    </Button>
                
                    {project.demourl && (
                        <Button variant="outline" size="sm" asChild>
                            <Link href={project.demourl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3" />
                                
                            </Link>
                        </Button>
                    )}
                </div>


            </CardContent>
        </Card>
    )
}