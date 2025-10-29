import { IoPartlySunny } from "react-icons/io5";

export function Theme(){
    return (
        <div>
            <div className = 'w-16 text-sm p-1 border border-teal-300 bg-teal-50 inset-shadow-sm inset-shadow-teal-600/50 rounded-2xl'>
                <div className = ' flex items-center justify-center border rounded-full w-6 h-6 border-teal-300'>
                    <IoPartlySunny className = "text-sm text-teal-500 "/>
                </div>
            </div>
        </div>
    )
}