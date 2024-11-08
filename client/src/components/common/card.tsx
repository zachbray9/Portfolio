import { ReactNode } from "react"

interface Props {
    children: ReactNode
    className?: string
}

export default function Card({children, className} : Props) {
    return (
        <div className={`rounded-xl border shadow ${className}`} >
            {children}
        </div>
    )
}