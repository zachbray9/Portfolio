import { NavLink } from "react-router-dom";
import ColorModeButton from "../ui/colorModeButton";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full py-6 backdrop-blur-sm bg-bg-light/75 dark:bg-bg-dark/75">
            <nav className="w-full flex items-center justify-between">
                <div className="inline-flex gap-5">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>

                <div className="inline-flex">
                    <ColorModeButton />
                </div>
            </nav>
        </header>
    )
}