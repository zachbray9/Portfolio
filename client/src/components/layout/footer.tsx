import { FaGithub, FaLinkedin } from "react-icons/fa6";
import SocialLink from "../ui/socialLink";
import EmailLink from "../ui/emailLink";

export default function Footer() {
    return (
        <footer className="flex flex-col sm:flex-row-reverse items-center justify-center sm:justify-between pb-32">
            <div className="flex items-center gap-4">
                <SocialLink url="https://linkedin.com/in/zach-bray" Icon={FaLinkedin} className="text-muted-light dark:text-muted-dark hover:text-black dark:hover:text-white"/>
                <SocialLink url="https://github.com/zachbray9" Icon={FaGithub} className="text-muted-light dark:text-muted-dark hover:text-black dark:hover:text-white"/>
                <EmailLink email="zachbray9@aol.com" className="text-muted-light dark:text-muted-dark hover:text-black dark:hover:text-white"/>
            </div>

            <p className="mt-8 sm:mt-0 text-muted-light dark:text-muted-dark text-sm">&copy; 2024 <span className="hover:text-black dark:hover:text-white"><a href="/">zachbray.dev</a></span></p>
        </footer>
    )
}