import { FaGithub, FaLinkedin } from "react-icons/fa6";
import SocialLink from "../common/socialLink";
import EmailLink from "../common/emailLink";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function Hero(){
    return (
        <section className="w-full flex flex-col items-start justify-center gap-4">
            <h1 className="text-5xl font-bold">Hi, my name is <span className="text-blue-500">Zach Bray</span></h1>

            <h4 className="text-2xl">24 year old Full Stack Software Engineer from Orlando</h4>

            <p>I like to learn about modern web dev technology, play volleyball, and get coding advice from my cat, Zuko.</p>

            <div className="flex gap-4 items-center justify-start" >
                <a href="/ZacharyBray-Resume-2024.pdf" target="_blank" className="inline-flex gap-1 items-center justify-center border rounded-md shadow-sm text-sm font-medium px-4 py-2 hover:bg-slate-200 transition-all">Download CV <FaCloudDownloadAlt size={24} /></a>
                <SocialLink Icon={FaGithub} url="https://github.com/zachbray9"/>
                <SocialLink Icon={FaLinkedin} url="https://linkedin.com/in/zach-bray"/>
                <EmailLink email="zachbray9@aol.com" subject="Portfolio Message" body="Nice portfolio!"/>
            </div>
        </section>
    )
}