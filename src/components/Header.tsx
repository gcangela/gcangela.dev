import Link from "next/link"
import ThemeToggle from "./ThemeToggle";

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


export const Header = () => {
    return <header className="px-2 sm:px-6">
        <div className="w-full flex gap-4 items-center justify-start sm:justify-between h-[var(--header-height)]">
            <Link href="/" className="!no-underline">
                <div className="flex gap-2 items-center justify-center text-2xl font-bold font-mono">
                    <span>GC</span>
                    <div className="mx-2 w-px h-[var(--header-height)] bg-black dark:bg-white"></div>
                    <span className="font-normal text-sm hidden sm:block">experienced web developer</span>
                </div></Link>

            <div className="flex gap-4 items-center">
                <ul className="space-x-2 lowercase">
                    {headerLinks.map(link => <Link className="hover:font-bold" key={link.href} href={link.href}>{link.label}</Link>)}
                </ul>
                <ThemeToggle />
            </div>
        </div>
    </header>

}