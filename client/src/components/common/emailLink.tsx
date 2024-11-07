import { IconType } from "react-icons"
import { FaEnvelope } from "react-icons/fa6"

interface Props{
    Icon?: IconType
    email: string
    subject?: string
    body?: string
}

export default function EmailLink({Icon = FaEnvelope, email, subject='', body=''}: Props){
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    return (
        <a href={mailtoLink} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-black">
            <Icon size={24}/>
        </a>
    )
}