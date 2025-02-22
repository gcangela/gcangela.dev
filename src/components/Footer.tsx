
import Link from "next/link"
import GitHubIcon from "./logos/GitHub"
import Image from "next/image"



export const Footer = () => {
    return <footer className="fixed bottom-0 left-0 w-full  p-6 text-center z-10 space-y-4">
        <p className="text-sm"> Built by Giancarlo Angela © {new Date().getFullYear()}</p>
        <ul className="flex w-full gap-4 justify-center text-sm  items-center">
            <li className="hover:scale-110"><Link target="_blank" key='github' href={'https://github.com/gcangela'}><GitHubIcon /></Link></li>
            <li className="hover:scale-110"><Link target="_blank" key='linkedin' href={'https://www.linkedin.com/in/giancarlo-angela/'}>
                <Image alt="linkedin-logo" src="/images/app-logos/linkedin-logo-color.svg" width={50} height={50} />
            </Link>
            </li>
        </ul>
    </footer>
}
