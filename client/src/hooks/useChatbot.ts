import { useEffect, useRef, useState } from "react";
import Message from "../models/message";
import axios from "axios";

export default function useAutoScrollToBottom() {
    const [isThinking, setIsThinking] = useState<boolean>(false)
    const lastMessageRef = useRef<HTMLDivElement>(null)
    const [threadId, setThreadId] = useState<string | null>(null)
    const [messageThread, setMessageThread] = useState<Message[]>([])

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messageThread])

    const submitMessage = async(message: string) => {
        setIsThinking(true)

        const newMessage: Message = { threadId: threadId, role: 'user', message: message }
        setMessageThread(prevMessages => [...prevMessages, newMessage])

        await axios.post<Message>(import.meta.env.VITE_API_URL, newMessage)
            .then(response => {
                setThreadId(response.data.threadId)
                setMessageThread(prevMessages => [...prevMessages, response.data])
            })
            .catch(error => {
                console.log(error)
            })

        setIsThinking(false)
    }

    const clearThread = () => {
        setMessageThread([])
        setThreadId(null)
    }

    return { messageThread, isThinking, lastMessageRef, submitMessage, clearThread }
}