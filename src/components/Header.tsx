"use client"
import Link from "next/link"
import { useTheme } from "./ThemeProvider";

const headerLinks = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/about",
        label: "About",
    },
    {
        href: "/projects",
        label: "Projects",
    },
]


export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded bg-gray-200 dark:bg-gray-800"
        >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
}

export const Header = () => {
    return <header className="sticky top-0 left-0 right-0 z-50 h-[var(--header-height)] px-6">
        <div className=" size-full flex gap-4 items-center justify-start sm:justify-between">
            <Link href="/" className="!no-underline">
                <div className="flex gap-2 items-center justify-center text-2xl font-bold font-mono">
                    <span>GC</span>
                    <div className="mx-2 w-px h-[var(--header-height)] bg-black dark:bg-white"></div>
                    <span className="font-normal text-sm hidden sm:block">experienced web developer</span>
                </div></Link>
            <ul className="space-x-2 lowercase">
                {headerLinks.map(link => <Link className="hover:font-bold" key={link.href} href={link.href}>{link.label}</Link>)}
            </ul>

            {/* fix this eventually <ThemeToggle /> */}
        </div>
    </header>

}