import { GoDependabot } from "react-icons/go"

interface Props {
    role: string
    message: string
}

export default function ChatbotMessage({ role, message }: Props) {
    if (role === "user") {
        return (
            <div className="flex justify-end items-center ">
                <div className="text-sm bg-black dark:bg-white text-white dark:text-black rounded border px-3 py-2 max-w-64">
                    <p>{message}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-start items-center gap-2">
            <GoDependabot size={20}/>
            <div className="text-sm bg-white dark:bg-bg-dark text-black dark:text-white rounded border px-3 py-2 max-w-64">
                <p>{message}</p>
            </div>
        </div>
    )
}