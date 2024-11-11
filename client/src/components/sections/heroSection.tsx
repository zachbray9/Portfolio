import { FaFileArrowDown, FaGithub, FaLinkedin } from "react-icons/fa6";
import SocialLink from "../ui/socialLink";
import EmailLink from "../ui/emailLink";
import LinkButton from "../ui/LinkButton";

export default function HeroSection() {
    return (
        <section id="hero" className="w-full flex flex-col items-start justify-center gap-4">
            <h1 className="font-bold">Hi, my name is <span className="text-blue-500">Zach Bray</span></h1>

            <h4>24 year old Full Stack Software Engineer</h4>

            <p className="font-light">I like to learn about modern web dev technology, play volleyball, and get coding advice from my cat, <span><a href="/Zuko_Pic.jpg" target="_blank" className="font-semibold hover:underline hover:text-muted">Zuko</a></span>.</p>

            <div className="flex gap-4 items-center justify-start" >
                <LinkButton
                    href='/ZacharyBray-Resume-2024.pdf'
                    label="Download CV"
                    RightIcon={FaFileArrowDown}
                    className="bg-bg-light dark:bg-bg-dark hover:bg-slate-200 dark:hover:bg-gray-800 text-black dark:text-white text-sm p-2 border border-slate-300 dark:border-gray-800 ring-0"
                />
                <SocialLink Icon={FaGithub} url="https://github.com/zachbray9" className="text-muted hover:text-black dark:hover:text-white" />
                <SocialLink Icon={FaLinkedin} url="https://linkedin.com/in/zach-bray" className="text-muted hover:text-black dark:hover:text-white" />
                <EmailLink email="zachbray9@aol.com" className="text-muted hover:text-black dark:hover:text-white" />
            </div>
        </section>
    )
}