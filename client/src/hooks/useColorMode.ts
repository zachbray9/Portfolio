import { useEffect, useState } from "react"

const COLOR_MODE_THEME = 'theme'

export function useColorMode() : [string, () => void] {
    const [colorMode, setColorMode] = useState(() => {
        const savedTheme = localStorage.getItem(COLOR_MODE_THEME)
        return savedTheme ? savedTheme : 'dark'
    })

    useEffect(() => {
        const root = document.documentElement
        if(colorMode === 'dark'){
            root.classList.add('dark')
        }
        else {
            root.classList.remove('dark')
        }

        localStorage.setItem(COLOR_MODE_THEME, colorMode)

    }, [colorMode])

    const toggleColorMode = () => {
        setColorMode((prevMode) => prevMode === 'dark' ? 'light' : 'dark')
    }

    return [colorMode, toggleColorMode]
}