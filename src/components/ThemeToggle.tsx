"use client"
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 self-end"
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    );
}