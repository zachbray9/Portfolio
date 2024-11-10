import { RxMoon, RxSun } from "react-icons/rx"
import { useColorMode } from "../../hooks/useColorMode"

export default function ColorModeButton() {
    const [colorMode, toggleColorMode] = useColorMode()

    return (
        <button className="dark:text-orange-300 text-indigo-500 rounded-md p-2 " onClick={toggleColorMode}>
            {colorMode === 'dark' ? <RxSun /> : <RxMoon />}
        </button>
    )
}