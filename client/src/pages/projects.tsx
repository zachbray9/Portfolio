import { Helmet } from "react-helmet-async";
import ProjectCard from "../components/ui/projectCard";

export default function Projects() {
    return (
        <>
            <Helmet>
                <title>Projects - Zach's Portfolio</title>
            </Helmet>

            <div className="flex flex-col gap-8">
                <h3 className="font-bold">All Projects</h3>

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

                    <ProjectCard
                        title="Project Cybernetica"
                        description="A 3D first person shooter game made with a small development team for my UCF Game Workshop class."
                        youtubeId="pyLSuHHFSkg"
                        skills={['Unreal Engine']}
                        demoLink="https://youtu.be/pyLSuHHFSkg?si=G3JyBACNAFOzYTST"

                    />

                    <ProjectCard
                        title="The Gravity of Silence"
                        description="Third person puzzle solving game made with a small development team for my UCF Game Production class."
                        youtubeId="gGB6lE-0YYg"
                        skills={['Unity', 'C#']}
                        demoLink="https://youtu.be/gGB6lE-0YYg?si=GJLQE4ehMe3--BI6"

                    />

                    <ProjectCard
                        title="Zork Builder"
                        description="A tool for creating and editing worlds for custom built Zork console game
                                in JSON. Abstracts the complexity of JSON file editing, making customizing worlds
                                accessible for users without JSON expertise."
                        youtubeId="Ch8GRsp8748"
                        skills={['C#', 'WPF']}
                        demoLink="https://youtu.be/Ch8GRsp8748?si=GfMV_QuOuFZX-yGg"
                        sourceCodeLink="https://github.com/zachbray9/Zork"
                    />

                </div>
            </div>

        </>
    )
}