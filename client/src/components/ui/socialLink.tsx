import { IconType } from "react-icons"

interface Props{
    Icon: IconType
    url: string
}

export default function SocialLink({Icon, url}: Props){
    return (
        <a href={url} target="_blank" className="text-slate-500 hover:text-black transition-all">
            <Icon size={24}/>
        </a>
    )
}