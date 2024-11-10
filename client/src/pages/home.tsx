import { Helmet } from "react-helmet-async";
import EducationSection from "../components/sections/educationSection";
import HeroSection from "../components/sections/heroSection";
import ProjectsSection from "../components/sections/projectsSection";
import SkillsSection from "../components/sections/skillsSection";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home - Zach's Portfolio</title>
            </Helmet>

            <div className="w-full flex flex-col gap-16">
                <HeroSection />
                <EducationSection />
                <SkillsSection />
                <ProjectsSection />
            </div>
        </>
    )
}