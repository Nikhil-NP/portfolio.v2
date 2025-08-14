import { Card, CardContent } from "@/components/ui/card";
import { Inter } from "next/font/google";

import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
});

export default function TechStack() {
   const tech = [
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    {name:"PostgreSQL" , logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"},
    {name:"Postman",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"},
  ];

  return (
    <div className="space-y-3">
      <p className={`text-xl font-semibold text-foreground ${inter.className}`}>
        I am currently working with:
      </p>
      <Card className="bg-accent/20 border border-border/50 p-1">
        <CardContent className="p-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 ">
            {tech.map((item) => (
              <div 
                key={item.name} 
                className="flex flex-col items-center group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-background/50 group-hover:bg-background shadow-sm group-hover:shadow-md transition-all duration-300">
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    
                    className="w-8 h-8 object-contain" 
                  />
                </div>
                <span className="mt-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}