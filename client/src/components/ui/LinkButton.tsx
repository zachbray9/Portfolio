interface Props {
    LeftIcon?: React.ElementType
    RightIcon?: React.ElementType
    href: string
    label: string
}

export default function LinkButton({href, label, LeftIcon, RightIcon} : Props) {
    return (
        <a href={href} target="_blank" className="inline-flex gap-2 items-center justify-center border rounded-md shadow-sm text-sm font-medium px-4 py-2 bg-slate-100 hover:bg-slate-200 transition-all">
            { LeftIcon && <span><LeftIcon /></span>}
            <p>{label}</p>
            { RightIcon && <span><RightIcon /></span>}
        </a>
    )
}