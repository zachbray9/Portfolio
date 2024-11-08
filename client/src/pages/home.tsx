import Education from "../components/sections/education";
import Hero from "../components/sections/hero";
import Projects from "../components/sections/projects";
import Skills from "../components/sections/skills";

export default function Home() {
    return (
        <div className="h-dvh w-full flex flex-col gap-16">
            <Hero />
            <Education />
            <Skills />
            <Projects />
        </div>
    )
}