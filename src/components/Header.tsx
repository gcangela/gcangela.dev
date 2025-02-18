import Link from "next/link"

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
    return <header className="fixed top-0 left-0 right-0 bg-black text-white shadow-md z-50 h-[44px] px-6">
        <div className=" size-full flex gap-4 items-center justify-between">
        <Link href="/" className="!no-underline">
       <div className="flex gap-2 items-center justify-center text-2xl font-bold font-mono">
            <span>GC</span>
            <span>|</span>
            <span className="font-normal text-sm">experienced web developer</span>
        </div></Link>
        <ul className="space-x-2 lowercase">
            {headerLinks.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </ul>
        </div>
    </header>

}