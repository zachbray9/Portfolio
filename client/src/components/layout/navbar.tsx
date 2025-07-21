import { NavLink } from "react-router-dom";
import ColorModeButton from "../ui/colorModeButton";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full py-6 backdrop-blur-sm bg-bg-light/75 dark:bg-bg-dark/75">
            <nav className="w-full flex items-center justify-between">
                <div className="inline-flex gap-5">
                    <NavLink to='/' className='text-muted-light dark:text-muted-dark hover:text-black dark:hover:text-white transition-colors'>Home</NavLink>
                    <NavLink to='/projects' className='text-muted-light dark:text-muted-dark hover:text-black dark:hover:text-white transition-colors'>Projects</NavLink>
                    <NavLink to='/contact' className='text-muted-light dark:text-muted-dark hover:text-black dark:hover:text-white transition-colors'>Contact</NavLink>
                </div>

                <div className="inline-flex">
                    <ColorModeButton />
                </div>
            </nav>
        </header>
    )
}