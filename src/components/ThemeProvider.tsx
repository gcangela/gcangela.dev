"use client";

import { createContext, useEffect, useState, useContext, Dispatch, SetStateAction } from "react";

type ThemeModes = "system" | 'light' | 'dark'

type ThemeContextType = { theme: ThemeModes, setTheme: Dispatch<SetStateAction<ThemeModes>> } | null

const ThemeContext = createContext<ThemeContextType>({ setTheme: () => { }, theme: 'dark' });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<ThemeModes>("system"); // Default to system
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as ThemeModes;
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            // Check system preference if no localStorage value
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(systemPrefersDark ? "dark" : "light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {

    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('This hook needs to be nested inside the ThemeProvider')
    }

    return context
};