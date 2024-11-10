import { IconType } from "react-icons"
import { FaEnvelope } from "react-icons/fa6"

interface Props{
    Icon?: IconType
    email: string
}

export default function EmailLink({Icon = FaEnvelope, email}: Props){
    const mailtoLink = `mailto:${email}`

    return (
        <a href={mailtoLink} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-black">
            <Icon size={24}/>
        </a>
    )
}