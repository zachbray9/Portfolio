import { FaArrowRight, FaGithub, FaGlobe } from "react-icons/fa6";
import Card from "../common/card";
import LinkButton from "../ui/LinkButton";
import SkillTag from "../ui/skillTag";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col gap-4">
            <h3>Projects</h3>

            <div className="flex flex-col gap-12">
                <Card className="p-4">
                    <div className="flex flex-col gap-6">

                        <h5 className="font-semibold">MyAnimeVault</h5>
                        <div className="flex flex-wrap gap-2">
                            <SkillTag label="React.js" icon={<i className="devicon-react-original colored"></i>} skillType="frontend" />
                            <SkillTag label="TypeScript" icon='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' skillType="frontend" />
                            <SkillTag label="Chakra UI" icon='/ChakraUiLogo.png' skillType="frontend" />
                            <SkillTag label="MobX" icon='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mobx/mobx-original.svg' skillType="frontend" />
                            <SkillTag label="Golang" icon={<i className="devicon-go-original-wordmark colored"></i>} skillType="backend" />
                            <SkillTag label="PostgresSQL" icon={<i className="devicon-postgresql-plain colored"></i>} skillType="backend" />
                        </div>
                        <p>
                            An interactive website that leverages the AniList API and allows users to explore, rate, and track their favorite anime series. The platform enables registered
                            users to curate anime lists and manage their watch progress, providing a seamless interface to organize and enjoy their anime journey.
                        </p>
                        <div className="inline-flex gap-2 justify-start items-center">
                            <LinkButton href="https://github.com/zachbray9/myanimevault" label="Source Code" LeftIcon={FaGithub} />
                            <LinkButton href="https://myanimevault.onrender.com" label="Live Site" LeftIcon={FaGlobe} />
                        </div>
                        <iframe className="aspect-video max-w-xl" src="https://www.youtube.com/embed/tl8NMqteznU?si=8f2BlP3jn-yY35ET" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </Card>

                <Card className="p-4">
                    <div className="flex flex-col gap-6">

                        <h5 className="font-semibold">AgilePro</h5>
                        <div className="flex flex-wrap gap-2">
                            <SkillTag label="React.js" icon={<i className="devicon-react-original colored"></i>} skillType="frontend" />
                            <SkillTag label="TypeScript" icon='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' skillType="frontend" />
                            <SkillTag label="Chakra UI" icon='/ChakraUiLogo.png' skillType="frontend" />
                            <SkillTag label="MobX" icon='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mobx/mobx-original.svg' skillType="frontend" />
                            <SkillTag label="C#" icon={<i className="devicon-csharp-plain colored"></i>} skillType="backend" />
                            <SkillTag label="ASP.NET Core" icon={<i className="devicon-dotnetcore-plain colored"></i>} skillType="backend" />
                            <SkillTag label="Entity Framework" icon={<i className="devicon-dot-net-plain colored"></i>} skillType="backend" />
                            <SkillTag label="SQL Server" icon={<i className="devicon-microsoftsqlserver-plain"></i>} skillType="backend" />
                            <SkillTag label="Microsoft Azure" icon={<i className="devicon-azure-plain colored"></i>} skillType="testing/deployment" />
                        </div>
                        <p>
                            An intuitive Project Management web app made using React, Typescript, MobX, Chakra UI, and .Net 6 that allows development teams to collaboratively manage
                            projects. Users can create and assign tickets, keep track of ticket status, and chat in real time making the development process streamlined and organized.
                        </p>
                        <div className="inline-flex gap-2 justify-start items-center">
                            <LinkButton href="https://github.com/zachbray9/bug-tracker" label="Source Code" LeftIcon={FaGithub} />
                            <LinkButton href="https://agilepro.azurewebsites.net" label="Live Site" LeftIcon={FaGlobe} />
                        </div>
                        <iframe className="aspect-video max-w-xl" src="https://www.youtube.com/embed/nnRKnhd6yys?si=i1feCKKRJ0X5W7ld" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </Card>

                <Card className="p-4">
                    <div className="flex flex-col gap-6">

                        <h5 className="font-semibold">Project Cybernetica</h5>
                        <div className="flex flex-wrap gap-2">
                            <SkillTag label="Unreal Engine" icon={<i className="devicon-unrealengine-original colored"></i>} skillType="testing/deployment" />
                        </div>
                        <p>
                            Project Cybernetica is a 3D first person shooter created in Unreal Engine 5 in which you are a mercenary in an apocalyptic city called Sariya,
                            a weapons development city. The city suddenly fell off the grid and lost contact with its people. Your goal is to infiltrate the city and discover
                            what secrets lie within. The project was made with a small development team for my UCF Game Workshop class.
                        </p>
                        <div className="inline-flex gap-2 justify-start items-center">
                            <LinkButton href="https://agilepro.azurewebsites.net" label="Learn More" RightIcon={FaArrowRight} />
                        </div>
                        <iframe className="aspect-video max-w-xl" src="https://www.youtube.com/embed/pyLSuHHFSkg?si=qFnhpU-XohLIKAut" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </Card>
            </div>
        </section>
    )
}