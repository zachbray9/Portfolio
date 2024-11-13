import { useField } from "formik"
import { twMerge } from "tailwind-merge"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
}

export default function FormInput({ name, className, ...props }: Props) {
    const [field, meta] = useField(name)

    return (
        <div className="flex flex-col gap-2">
            <input
                className={twMerge("px-3 py-1 rounded-md bg-transparent shadow-sm border border-gray-300 dark:border-slate-700 focus:border-black dark:focus:border-white outline-none", className)}
                {...field}
                name={name}
                {...props}
            />

            {meta.touched && meta.error && <p className="text-red-400 text-sm">{meta.error}</p>}
        </div>
    )
}