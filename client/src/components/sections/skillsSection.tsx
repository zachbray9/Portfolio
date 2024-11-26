import SkillTag from "../ui/skillTag";


export default function SkillsSection() {
    return (
        <section className="w-full flex flex-col items-start justify-center gap-4">
            <h3 className="font-semibold text-2xl sm:text-3xl">Skills</h3>
            <div className="flex flex-wrap gap-2">
                <SkillTag label="React.js" icon={<i className="devicon-react-original colored"></i>} skillType="frontend" />
                <SkillTag label="TypeScript" icon='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' skillType="frontend" />
                <SkillTag label="Javascript" icon='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' skillType="frontend" />
                <SkillTag label="Chakra UI" icon='/ChakraUiLogo.png' skillType="frontend" />
                <SkillTag label="Tailwind CSS" icon={<i className="devicon-tailwindcss-original colored"></i>} skillType="frontend" />
                <SkillTag label="MobX" icon='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mobx/mobx-original.svg' skillType="frontend" />

                <SkillTag label="Golang" icon={<i className="devicon-go-original-wordmark colored"></i>} skillType="backend"/>
                <SkillTag label="C#" icon={<i className="devicon-csharp-plain colored"></i>} skillType="backend"/>
                <SkillTag label="ASP.NET Core" icon={<i className="devicon-dotnetcore-plain colored"></i>} skillType="backend"/>
                <SkillTag label="Entity Framework" icon={<i className="devicon-dot-net-plain colored"></i>} skillType="backend"/>
                <SkillTag label="SQL Server" icon={<i className="devicon-microsoftsqlserver-plain"></i>} skillType="backend"/>
                <SkillTag label="PostgresSQL" icon={<i className="devicon-postgresql-plain colored"></i>} skillType="backend"/>

                <SkillTag label="Microsoft Azure" icon={<i className="devicon-azure-plain colored"></i>} skillType="cloud/version control"/>
                <SkillTag label="Git" icon={<i className="devicon-git-plain colored"></i>} skillType="cloud/version control"/>

                <SkillTag label="Unity" icon={<i className="devicon-unity-plain colored"></i>} skillType="other"/>
                <SkillTag label="Unreal Engine" icon={<i className="devicon-unrealengine-original colored"></i>} skillType="other"/>
            </div>
        </section>
    )
}