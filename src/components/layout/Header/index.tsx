import { NavItem } from "./navItem";
import { Theme } from "./theme";
import { MdColorLens } from "react-icons/md";
import { BsEmojiSunglasses } from "react-icons/bs";
import { Logo } from "./logo";

export function Header(){ 
    return (
        <header className = 'dark:border-b-white/10 bg-white dark:bg-neutral-900 z-100 fixed top-0 left-0 w-full shadow-md bg-white border-b border-b-gray-200 flex justify-center '>
            <div className = 'w-[700px]'>
                <div className = 'flex justify-between items-center p-4'>
                    <Logo />

                    <ul className = 'hidden md:flex gap-4 '>
                        <NavItem label="Ilustrações" path="/" icon = {MdColorLens}/>
                        <NavItem label="Sobre o autor" path="/about" icon = {BsEmojiSunglasses}/>
                    </ul>

                    <Theme />
                </div>
            </div>
        </header>
    )
}