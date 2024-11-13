import { useField } from "formik"
import { twMerge } from "tailwind-merge"

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string,
    containerClassName?: string
}

export default function FormTextArea({ name, containerClassName, className, ...props }: Props) {
    const [field, meta] = useField(name)

    return (
        <div className={twMerge("flex flex-col gap-2", containerClassName)}>
            <textarea
                className={twMerge("px-3 py-1 rounded-md bg-transparent shadow-sm border border-gray-300 dark:border-slate-700 focus:border-black dark:focus:border-white outline-none", className)}
                {...field}
                name={name}
                {...props}
            />

            {meta.touched && meta.error && <p className="text-red-400 text-sm">{meta.error}</p>}
        </div>
    )
}