import { useField } from "formik"
import { twMerge } from "tailwind-merge"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
    wrapperClassName?: string
}

export default function FormInput({ name, wrapperClassName, className, ...props }: Props) {
    const [field, meta] = useField(name)

    return (
        <div className={twMerge("flex flex-col gap-2", wrapperClassName)}>
            <input
                className={twMerge("px-3 py-1 rounded-md bg-transparent shadow-sm placeholder:text-muted-light dark:placeholder:text-muted-dark border border-gray-300 dark:border-slate-700 focus:border-black dark:focus:border-white outline-none", className)}
                {...field}
                name={name}
                {...props}
            />

            {meta.touched && meta.error && <p className="text-red-400 text-sm">{meta.error}</p>}
        </div>
    )
}