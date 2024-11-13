interface Props {
    size?: number
    color?: string
}

export default function Spinner({size = 24, color = 'currentColor'} : Props) {
    return (
        <svg
            className="animate-[spin_0.6s_linear_infinite]"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background circle (optional, for a subtle effect) */}
            <circle
                cx="12"
                cy="12"
                r="10"
                stroke={color}
                strokeWidth="2"
                className="opacity-20"
            />
            {/* Rotating part */}
            <path
                d="M12 2a10 10 0 010 20A10 10 0 0112 2z"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="31.4 31.4" /* Controls dash pattern */
                strokeDashoffset="31.4"     /* Offset to make the dash */
                className="opacity-80"
            />
        </svg>
    )
}