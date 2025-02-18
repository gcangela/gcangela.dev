
import Link from "next/link"


import LinkedInIcon from "./logos/LinkedIn"
import GitHubIcon from "./logos/GitHub"



export const Footer = () => {
    return <footer className="w-full text-white text-center py-4 flex flex-col gap-4 justify-center">
        <p className="text-sm"> Built by Giancarlo Angela © {new Date().getFullYear()}</p>
        <ul className="flex w-full gap-4 justify-center text-sm"> 
           <li className="hover:scale-110"><Link target="_blank" key='github' href={'https://github.com/gcangela'}><GitHubIcon  /></Link></li> 
           <li className="hover:scale-110"><Link target="_blank" key='linkedin' href={'https://www.linkedin.com/in/giancarlo-angela/'}><LinkedInIcon  /></Link></li> 
             </ul>
    </footer>
}