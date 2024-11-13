import { FaArrowRight, FaGithub, FaGlobe } from "react-icons/fa6";
import Card from "../common/card";
import LinkButton from "./LinkButton";
import { RxVideo } from "react-icons/rx";
import NavLinkButton from "./navLinkButton";

interface Props {
    title: string
    description: string
    youtubeId: string
    skills: string[]
    sourceCodeLink?: string
    liveSiteLink?: string
    learnMoreLink?: string
    demoLink?: string
}

export default function ProjectCard({ title, description, youtubeId, skills, sourceCodeLink, liveSiteLink, demoLink, learnMoreLink }: Props) {
    return (
        <Card className="flex flex-col gap-6 p-8">
            <img src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}></img>

            <div className="flex flex-col gap-2">
                <div className="flex gap justify-start items-center gap-2">
                    <h5 className="font-semibold">{title}</h5>
                    {demoLink && <a href={demoLink} target="_blank" className="text-red-700 hover:text-red-900 transition-colors"><RxVideo /></a>}
                </div>
                <p className="text-xs">{description}</p>
            </div>

            <div className="flex flex-col h-full justify-between gap-4">
                <div className="flex flex-wrap gap-2 ">
                    {skills.map(skill => (
                        <div key={skill} className="flex justify-center items-center px-2 py-1 rounded-md text-[10px] font-semibold bg-secondary dark:bg-secondary-dark" >{skill}</div>
                    ))}
                </div>
                <div className="inline-flex gap-2 justify-start items-center">
                    {sourceCodeLink && <LinkButton href={sourceCodeLink} label="Source Code" LeftIcon={FaGithub} />}
                    {liveSiteLink && <LinkButton href={liveSiteLink} label="Live Site" LeftIcon={FaGlobe} />}
                    {learnMoreLink && <NavLinkButton to={learnMoreLink} label="Learn More" RightIcon={FaArrowRight} />}
                </div>
            </div>


        </Card>
    )
}