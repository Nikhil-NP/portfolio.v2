"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes"; // get-set currnet theme
import { Button } from "@/components/ui/button";
import { button } from "framer-motion/client";

export function ThemeToggle(){
    const {theme, setTheme} = useTheme();

    return(
        <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => setTheme(theme === "light" ? "dark":"light")}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
        
    )
}