import { Helmet } from "react-helmet-async";
import Card from "../components/common/card";
import SkillTag from "../components/ui/skillTag";
import LinkButton from "../components/ui/LinkButton";
import { FaArrowRight, FaGithub, FaGlobe } from "react-icons/fa6";

export default function Projects() {
    return (
        <>
            <Helmet>
                <title>Projects - Zach's Portfolio</title>
            </Helmet>

            <div className="flex flex-col gap-8">
                <h2 className="font-bold">All Projects</h2>

                <div className="flex flex-col gap-12">
                    <Card className="p-8">
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
                                An interactive web app that leverages the AniList API and allows users to explore, rate, and track their favorite anime series. The platform enables registered
                                users to curate anime lists and manage their watch progress, providing a seamless interface to organize and enjoy their anime journey.
                            </p>
                            <div className="inline-flex gap-2 justify-start items-center">
                                <LinkButton href="https://github.com/zachbray9/myanimevault" label="Source Code" LeftIcon={FaGithub} />
                                <LinkButton href="https://myanimevault.onrender.com" label="Live Site" LeftIcon={FaGlobe} />
                            </div>
                            <iframe className="aspect-video max-w-xl" src="https://www.youtube.com/embed/tl8NMqteznU?si=8f2BlP3jn-yY35ET" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </Card>

                    <Card className="p-8">
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

                    <Card className="p-8">
                        <div className="flex flex-col gap-6">

                            <h5 className="font-semibold">Project Cybernetica</h5>
                            <div className="flex flex-wrap gap-2">
                                <SkillTag label="Unreal Engine" icon={<i className="devicon-unrealengine-original colored"></i>} skillType="testing/deployment" />
                            </div>
                            <p>
                                A 3D first person shooter game created in Unreal Engine 5 in which you are a mercenary in an apocalyptic city called Sariya,
                                a weapons development city. The city suddenly fell off the grid and lost contact with its people. Your goal is to infiltrate the city and discover
                                what secrets lie within. The project was made with a small development team for my UCF Game Workshop class.
                            </p>
                            <div className="inline-flex gap-2 justify-start items-center">
                                <LinkButton href="https://agilepro.azurewebsites.net" label="Learn More" RightIcon={FaArrowRight} />
                            </div>
                            <iframe className="aspect-video max-w-xl" src="https://www.youtube.com/embed/pyLSuHHFSkg?si=qFnhpU-XohLIKAut" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </Card>

                    <Card className="p-8">
                        <div className="flex flex-col gap-6">

                            <h5 className="font-semibold">The Gravity of Silence</h5>

                            <div className="flex flex-wrap gap-2">
                                <SkillTag label="C#" icon={<i className="devicon-csharp-plain colored"></i>} skillType="backend" />
                                <SkillTag label="Unity" icon={<i className="devicon-unity-plain colored"></i>} skillType="testing/deployment" />
                            </div>

                            <p>
                                A third person puzzle solving game where the user must utilize their gravity altering abilities to complete levels and regain control of their
                                space ship from its rogue AI. This project was made with a small development team for my UCF Game Production class.
                            </p>

                            <div className="inline-flex gap-2 justify-start items-center">
                                <LinkButton href="https://leonard-garcia.itch.io/gravity-of-silence" label="Learn More" RightIcon={FaArrowRight} />
                                <LinkButton href="https://leonard-garcia.itch.io/gravity-of-silence" label="Download" RightIcon={FaArrowRight} />
                            </div>

                            <iframe className="aspect-video max-w-xl" src="https://www.youtube.com/embed/gGB6lE-0YYg?si=54HPZxRy0w5W1elt" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </Card>

                    <Card className="p-8">
                        <div className="flex flex-col gap-6">

                            <h5 className="font-semibold">Zork Builder</h5>

                            <div className="flex flex-wrap gap-2">
                                <SkillTag label="WPF" icon={<i className="devicon-dotnetcore-plain colored"></i>} skillType="frontend" />
                                <SkillTag label="C#" icon={<i className="devicon-csharp-plain colored"></i>} skillType="backend" />
                            </div>

                            <p>
                                A tool for creating and editing worlds for custom built <span className="font-semibold hover:underline hover:text-muted"><a href="https://en.wikipedia.org/wiki/Zork#Gameplay" target="_blank">Zork</a></span> console game
                                in JSON. Abstracts the complexity of JSON file editing, making customizing worlds
                                accessible for users without JSON expertise.
                            </p>

                            <div className="inline-flex gap-2 justify-start items-center">
                                <LinkButton href="https://github.com/zachbray9/Zork" label="Source Code" LeftIcon={FaGithub} />
                            </div>

                            <iframe className="aspect-video max-w-xl" src="https://www.youtube.com/embed/Ch8GRsp8748?si=inkVMuwPghHSNshO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </Card>
                </div>
            </div>

        </>
    )
}