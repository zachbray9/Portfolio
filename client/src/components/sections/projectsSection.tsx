import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import ProjectCard from "../ui/projectCard";

export default function ProjectsSection() {
    return (
        <section id="projects" className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-2xl sm:text-3xl">Featured Projects</h3>
                <NavLink to='/projects' className='text-muted hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors'>
                    <p>view more</p>
                    <FaArrowRight />
                </NavLink>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ProjectCard
                    title="MyAnimeVault"
                    description="Web app that allows users to curate anime lists and manage their watch progress, providing a seamless interface to organize and enjoy their anime journey."
                    youtubeId="tl8NMqteznU"
                    skills={['React.js', 'TypeScript', 'Chakra UI', 'MobX', 'Golang', 'PostgresSQL', 'Render']}
                    sourceCodeLink="https://github.com/zachbray9/myanimevault"
                    liveSiteLink="https://myanimevault.onrender.com"
                    demoLink="https://youtu.be/tl8NMqteznU?si=kxNChp1eT34s2m9S"
                />

                <ProjectCard 
                    title="AgilePro"
                    description="Project Management web app that allows development teams to collaborate on projects in real time."
                    youtubeId="nnRKnhd6yys"
                    skills={['React.js', 'Typescript', 'Chakra UI', 'MobX', 'C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'Microsoft Azure']}
                    sourceCodeLink="https://github.com/zachbray9/bug-tracker"
                    liveSiteLink="https://agilepro.azurewebsites.net"
                    demoLink="https://youtu.be/nnRKnhd6yys?si=JYWdfu-xE2zVN_r1"
                />
            </div>
        </section>
    )
}