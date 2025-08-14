import { Education, PersonalInfo, SocialLinks, Projects } from "./types";

export const personalInfo: PersonalInfo = {
    name: "Nikhil Purohit.",
    greetings: "Hey there, I'm",
    subTitle: "<Learning & Building />",
    description: "Final-year CSE undergrad | Passionate about web development, indie hacking, reverse engineering, and exploring emerging technologies.",
    email: "nikhilrajpurohitnkp@gmail.com",
    image: "/Profile/nikh.jpg",
};

export const socialLinks: SocialLinks = {
    x:"https://x.com/Nikhil_KP_",
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

// ...existing code...

export const projects:Projects[] = [
  {
    title: "Anonymous Grievance System",
    description: "A secure complaint management system with role-based authentication, email verification, and AI-powered content moderation.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/Nikhil-NP/Anonymous-Grievance-System", 
    demourl:"https://youtu.be/xXOHnJW8uvg?si=tOvMIBZtutoQ5KCM",
    highlights: [
      "JWT token authentication & email-based OTP verification",
      "Google Gemini API for content moderation",
      "RESTful APIs with middleware for route protection",
      "MongoDB Atlas for cloud data management"
    ]
  },
  {
    title: "Anime Recommendation Web App",
    description: "A dynamic web application for discovering anime based on user preferences, integrating real-time data from external APIs.",
    tech: ["Python", "Flask", "Jikan API", "Bootstrap"],
    github: "https://github.com/Nikhil-NP/Anime-Recommendation-WebApp",
    highlights: [
      "Flask backend with Jinja API integration",
      "Responsive Bootstrap & Jinja templates frontend",
      "Dynamic streaming platform logos",
      "Efficient runtime operations without local storage"
    ]
  },
  {
    title: "Places Lead Generation Bot",
    description: "An automated lead generation tool using Google Places API to collect business information across Indian cities.",
    tech: ["Python", "Google Places API", "CSV"],
    github: "https://github.com/Nikhil-NP/Places-Lead-Generator",
    highlights: [
      "Rate limiting & pagination for optimized API usage",
      "Search and ranking system based on relevance",
      "Dynamic delays & fault tolerance",
      "Structured CSV data export"
    ]
  }
];


