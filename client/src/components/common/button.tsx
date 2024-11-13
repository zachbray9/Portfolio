import { twMerge } from "tailwind-merge";
import Spinner from "./spinner";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean
    loadingText?: string
}

export default function Button({ isLoading = false, loadingText = 'Loading', className = '', disabled, children, ...props }: Props) {
    return (
        <button
            className={twMerge('px-4 py-2 rounded-md disabled:cursor-not-allowed', className)}
            disabled={disabled || isLoading}
            {...props}
        >
            {!isLoading ? (
                children
            ) : (
                <div className="flex justify-center items-center gap-2">
                    <Spinner />
                    <p>{loadingText}</p>
                </div>
            )}
            
        </button>
    )
}