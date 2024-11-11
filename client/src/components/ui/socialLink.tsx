import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge"

interface Props {
    Icon: IconType
    url: string
    className?: string
}

export default function SocialLink({ Icon, url, className = '' }: Props) {
    return (
        <a href={url} target="_blank" className={twMerge('text-slate-500 hover:text-black transition-colors', className)}>
            <Icon size={24} />
        </a>
    )
}