import { IoPartlySunny } from "react-icons/io5";
import { useTheme } from "../../../hooks/useTheme";
import { FaMoon } from "react-icons/fa";


export function Theme(){

    const { theme, setTheme } = useTheme();

    return (
        <div>
            <div className = 'dark:bg-neutral-900 w-16 text-sm p-1 border border-teal-300 bg-teal-50 inset-shadow-sm inset-shadow-teal-600/50 rounded-2xl'>
                <div
                    onClick = {() => setTheme(theme === "dark" ? "light" : "dark")}
                    className = {`
                        cursor-pointer 
                        flex items-center justify-center 
                        border rounded-full w-6 h-6 border-teal-300
                        text-sm text-teal-500 transition-transform duration-500 ease-in-out
                        ${ theme == 'dark' ? 'translate-x-[calc(100%+0.4rem)]' :  'translate-x-0' }
                        `
                    }
                >
                    {
                        theme === "dark" ? 
                            <FaMoon className = "text-sm text-teal-500"/>
                        :
                            <IoPartlySunny className = "text-sm text-teal-500"/>   
                    }
                </div>
            </div>
        </div>
    )
}