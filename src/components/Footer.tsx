
import Link from "next/link"
import GitHubIcon from "./logos/GitHub"
import Image from "next/image"



export const Footer = () => {
    return <footer className="relative z-10 flex flex-col justify-center h-[var(--footer-height)] p-2 sm:p-6 text-center space-y-2 sm:space-y-4 shrink-0 justify-self-end">
        <p className="text-sm"> Built by Giancarlo Angela © {new Date().getFullYear()}</p>
        <ul className="flex w-full gap-4 justify-center text-sm  items-center">
            <li className="hover:scale-110"><Link target="_blank" key='github' href={'https://github.com/gc-angela'}><GitHubIcon /></Link></li>
            <li className="hover:scale-110"><Link target="_blank" key='github' href={'https://github.com/gcangela'}><GitHubIcon /></Link></li>
            <li className="hover:scale-110"><Link target="_blank" key='linkedin' href={'https://www.linkedin.com/in/giancarlo-angela/'}>
                <Image alt="linkedin-logo" src="/images/app-logos/linkedin-logo-color.svg" width={50} height={50} className="h-[32px] sm:h-[50px]" />
            </Link>
            </li>
        </ul>
    </footer>
}
