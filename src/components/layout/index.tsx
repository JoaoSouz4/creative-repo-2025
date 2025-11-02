import { Content } from "./Content";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout(){
    return (
        <div className = 'dark:bg-neutral-800 w-full w-full flex flex-col items-center justify-center'>
            <div className = ' flex flex-col items-center'>
                <div className  = 'flex flex-col w-[100dvw] md:w-[700px]'>
                    <Header />
                    <Content />
                </div>
            </div>
            <Footer />
        </div>
    )
}