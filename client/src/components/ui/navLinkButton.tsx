import { NavLink, NavLinkProps } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface Props extends NavLinkProps {
    LeftIcon?: React.ElementType
    RightIcon?: React.ElementType
    label: string
    className?: string
}

// Only for navigating to pages outside of the application!

export default function LinkButton({ label, LeftIcon, RightIcon, className = '', ...props }: Props) {
    return (
        <NavLink
            className={twMerge(`inline-flex gap-2 items-center justify-center border rounded-md shadow-sm text-[10px] font-semibold px-2 py-1 
                bg-black hover:bg-gray-700 text-white dark:bg-white dark:hover:bg-slate-300 dark:text-black transition-colors`, className)}
            {...props}
        >
            {LeftIcon && <span><LeftIcon /></span>}
            <p>{label}</p>
            {RightIcon && <span><RightIcon /></span>}
        </NavLink>
    )
}