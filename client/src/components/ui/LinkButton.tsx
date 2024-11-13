import { twMerge } from "tailwind-merge"

interface Props {
    LeftIcon?: React.ElementType
    RightIcon?: React.ElementType
    href: string
    label: string
    className?: string
    target?: '_blank' | '_self'
}

export default function LinkButton({ href, label, LeftIcon, RightIcon, className = '', target = '_blank' }: Props) {
    return (
        <a
            href={href}
            target={target}
            className={twMerge(`inline-flex gap-2 items-center justify-center border rounded-md shadow-sm text-[10px] font-semibold px-2 py-1 
                bg-black hover:bg-gray-700 text-white dark:bg-white dark:hover:bg-slate-300 dark:text-black transition-colors`, className)}
        >
            {LeftIcon && <span><LeftIcon /></span>}
            <p>{label}</p>
            {RightIcon && <span><RightIcon /></span>}
        </a>
    )
}