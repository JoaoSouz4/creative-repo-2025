import type { ElementType } from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
    label: string,
    path: string,
    icon: ElementType
}

export function NavItem({label, path, icon:Icon}: NavItemProps){
    return (
        <Link to = {path}>
            <nav className = 'dark:hover:bg-neutral-950 hover:bg-teal-50 flex items-center gap-2 cursor-pointer text-sm p-2 px-4 rounded-2xl inset-shadow-sm  inset-shadow-sm text-teal-500 border border-teal-200 '>
                <Icon className = 'text-teal-500'/>
                {label}
            </nav>
        </Link>
    )
}