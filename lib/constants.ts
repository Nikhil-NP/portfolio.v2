import { Education, PersonalInfo, SocialLinks, Projects } from "./types";



/**
 * @fileoverview Personal portfolio data constants
 * @author Nikhil Purohit 
 * @created 2025-08-15
 * @repository https://github.com/Nikhil-NP/portfolio-v2
 */



export const personalInfo: PersonalInfo = {
    name: "Nikhil Purohit.",
    greetings: "Hey there, I'm",
    subTitle: "<Learning & Building />",
    description: "Final-year Computer Science student with a passion for crafting digital solutions that matter. I build web applications, explore emerging technologies, and turn ideas into reality through clean code and thoughtful design.",
    email: "nikhilrajpurohitnkp@gmail.com",
    image: "/Profile/nikh.jpg",
    rotatingSubTitle: [
          "<Exploring Web and Data />",
          "<Full Stack Developer />",
          "<Problem Solver />",
          "<Tech Enthusiast />",
          "<npc trying to code. />",

    ]
};

export const socialLinks: SocialLinks = {
    x:"https://x.com/Nikh0p",
    github:"https://github.com/Nikhil-NP",
    linkedIn:"https://www.linkedin.com/in/nikhil-purohit-452167314/",
    email:"nikhilrajpurohitnkp@gmail.com",

}

export const resumeLink = "https://drive.google.com/file/d/1n6h9rXV8aN4dipLLmY_7pjyj9ceWzxSI/view?usp=sharing"


export const education : Education={
    institution:"ATME College of Engineering",
    degree:"B.E in CSE",
    duration:"Dec 2022 - May 2026",
}



export const projects:Projects[] = [
  {
    title: "Anonymous Grievance System",
    description: "A secure complaint management system with JWT authentication, email verification, and AI-powered content moderation using Google Gemini API.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/Nikhil-NP/Anonymous-Grievance-System", 
    demourl:"https://youtu.be/xXOHnJW8uvg?si=tOvMIBZtutoQ5KCM",
    
  },
  {
    title: "Anime Recommendation Web App",
    description: "A Flask web app that recommends anime using the Jikan API with responsive Bootstrap frontend and dynamic streaming platform integration.",
    tech: ["Python", "Flask", "Jikan API", "Bootstrap"],
    github: "https://github.com/Nikhil-NP/Anime-Recommendation-WebApp",
    
  },
  {
    title: "Places Lead Generation Bot",
    description: "Python automation tool that generates business leads across Indian cities using Google Places API with intelligent ranking and CSV export.",
    tech: ["Python", "Google Places API", "CSV"],
    github: "https://github.com/Nikhil-NP/Places-Lead-Generator",
    
  }
];




