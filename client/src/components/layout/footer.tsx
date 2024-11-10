import { FaGithub, FaLinkedin } from "react-icons/fa6";
import SocialLink from "../ui/socialLink";
import EmailLink from "../ui/emailLink";

export default function Footer() {
    return (
        <footer className="flex flex-col sm:flex-row-reverse items-center justify-center sm:justify-between pb-32">
            <div className="flex items-center gap-4">
                <SocialLink url="https://linkedin.com/in/zach-bray" Icon={FaLinkedin}/>
                <SocialLink url="https://github.com/zachbray9" Icon={FaGithub}/>
                <EmailLink email="zachbray9@aol.com" />
            </div>

            <p className="mt-8 sm:mt-0 text-muted dark:text-muted-dark text-sm">&copy; 2024 <span className="hover:text-black"><a href="/">zach-bray-portfolio.com</a></span></p>
        </footer>
    )
}