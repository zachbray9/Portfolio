import { ReactNode } from "react"

interface Props {
    children: ReactNode
    className?: string
}

export default function Card({children, className} : Props) {
    return (
        <div className={`rounded-xl border dark:border-gray-800 shadow ${className}`} >
            {children}
        </div>
    )
}