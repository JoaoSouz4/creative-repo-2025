import { Outlet } from "react-router-dom";

export function Content(){
    return (
        <main className = 'px-4 md:px-0 min-h-[100dvh] mt-32 flex-1'>
            <Outlet />
        </main>
    )
}