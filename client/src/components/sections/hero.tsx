import { FaFileArrowDown, FaGithub, FaLinkedin } from "react-icons/fa6";
import SocialLink from "../ui/socialLink";
import EmailLink from "../ui/emailLink";
import LinkButton from "../ui/LinkButton";

export default function Hero(){
    return (
        <section id="hero" className="w-full flex flex-col items-start justify-center gap-4">
            <h1 className="font-bold">Hi, my name is <span className="text-blue-500">Zach Bray</span></h1>

            <h4>24 year old Full Stack Software Engineer from Orlando</h4>

            <p>I like to learn about modern web dev technology, play volleyball, and get coding advice from my cat, <span><a href="/Zuko_Pic.jpg" target="_blank" className="font-semibold hover:underline hover:text-muted">Zuko</a></span>.</p>

            <div className="flex gap-4 items-center justify-start" >
                <LinkButton href='/ZacharyBray-Resume-2024.pdf' label="Download CV" RightIcon={FaFileArrowDown}/>
                <SocialLink Icon={FaGithub} url="https://github.com/zachbray9"/>
                <SocialLink Icon={FaLinkedin} url="https://linkedin.com/in/zach-bray"/>
                <EmailLink email="zachbray9@aol.com" subject="Portfolio Message" body="Nice portfolio!"/>
            </div>
        </section>
    )
}