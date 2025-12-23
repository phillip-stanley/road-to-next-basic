'use client';
import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();


    return (
        <Button
            variant="outline"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="cursor-pointer w-6 h-6"
        >
            {theme == "light" ? <LucideMoon /> : <LucideSun />}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export default ThemeSwitcher;