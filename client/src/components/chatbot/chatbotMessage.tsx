import { RiRobot2Line } from "react-icons/ri"
import Markdown, { Components } from "react-markdown"
import { NavLink } from "react-router-dom"
import remarkGfm from "remark-gfm"

interface Props {
    role: string
    message: string
}

const componentOverrides: Partial<Components> = {
    h1: (...props) => <h1 className="font-bold text-xl" {...props}/>,
    h2: (...props) => <h2 className="font-semibold text-lg" {...props}/>,
    h3: (...props) => <h3 className="font-medium text-base" {...props}/>,
    h4: (...props) => <h4 className="font-medium text-sm" {...props}/>,
    a: ({href, children, ...props}) => {
        const isInternalLink = href && (href.startsWith('/') || href.startsWith(window.location.origin))

        if(isInternalLink) {
            const internalPath = href.replace(window.location.origin, '')

            return (
                <NavLink to={internalPath} className="text-blue-500 underline" {...props}>
                    {children}
                </NavLink>
            )
        }

        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline" {...props}>
                {children}
            </a>
        )
    }
}

export default function ChatbotMessage({ role, message }: Props) {
    if (role === "user") {
        return (
            <div className="flex justify-end items-center ">
                <div className="text-sm bg-black dark:bg-white text-white dark:text-black rounded border px-3 py-2 max-w-64">
                    <Markdown className='chat-message' remarkPlugins={[remarkGfm]} components={componentOverrides}>{message}</Markdown>
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-start items-center gap-2">
            <RiRobot2Line size={20} className="shrink-0" />
            <div className="text-sm bg-white dark:bg-bg-dark text-black dark:text-white rounded border dark:border-gray-800 px-3 py-2 max-w-64">
                <Markdown className='chat-message' remarkPlugins={[remarkGfm]} components={componentOverrides}>{message}</Markdown>
            </div>
        </div>
    )
}