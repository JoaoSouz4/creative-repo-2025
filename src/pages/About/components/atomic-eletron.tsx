import type { ElementType } from "react"

interface AtomicElectronProps {
    icon: ElementType,
    delay: string
}

export function AtomicElectron({icon: Icon, delay}: AtomicElectronProps){
    return (
        <div 
            className = 'absolute animate-orbit' 
            style = {{animationDelay: delay}}
        > 
            <div
                className = " dark:bg-teal-500 animate-inflate w-12 h-12 flex items-center justify-center rounded-full shadow-md shadow-teal-500/50 bg-white"
                style={{ animationDelay: delay}}
            >
                <div 
                    className = 'animate-counter-rotate'
                    style={{animationDelay: delay}}
                >
                    <Icon  className="text-4xl text-teal-500 dark:text-neutral-700"/>
                </div>
            </div>
        </div>
    )
}