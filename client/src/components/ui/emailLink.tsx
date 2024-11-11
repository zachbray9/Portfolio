import { IconType } from "react-icons"
import { FaEnvelope } from "react-icons/fa6"
import { twMerge } from "tailwind-merge"

interface Props{
    Icon?: IconType
    email: string
    className?: string
}

export default function EmailLink({Icon = FaEnvelope, email, className = ''}: Props){
    const mailtoLink = `mailto:${email}`

    return (
        <a href={mailtoLink} target="_blank" rel="noopener noreferrer" className={twMerge('text-slate-500 hover:text-black', className)}>
            <Icon size={24}/>
        </a>
    )
}