import { GoDependabot } from "react-icons/go"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface Props {
    role: string
    message: string
}

export default function ChatbotMessage({ role, message }: Props) {
    if (role === "user") {
        return (
            <div className="flex justify-end items-center ">
                <div className="text-sm bg-black dark:bg-white text-white dark:text-black rounded border px-3 py-2 max-w-64">
                    <Markdown className='chat-message' remarkPlugins={[remarkGfm]}>{message}</Markdown>
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-start items-center gap-2">
            <GoDependabot size={20} className="shrink-0" />
            <div className="text-sm bg-white dark:bg-bg-dark text-black dark:text-white rounded border dark:border-gray-800 px-3 py-2 max-w-64">
                <Markdown className='chat-message' remarkPlugins={[remarkGfm]}>{message}</Markdown>
            </div>
        </div>
    )
}