import { RxMoon, RxSun } from "react-icons/rx"
import { useColorMode } from "../../hooks/useColorMode"

export default function ColorModeButton() {
    const [colorMode, toggleColorMode] = useColorMode()

    return (
        <button
            className="flex justify-center items-center dark:text-orange-300 text-indigo-500 hover:bg-slate-200 dark:hover:bg-gray-800 rounded-md h-9 w-9 transition-colors"
            onClick={toggleColorMode}
        >
            {colorMode === 'dark' ? <RxSun /> : <RxMoon />}
        </button>
    )
}