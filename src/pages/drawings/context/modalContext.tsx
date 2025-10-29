import { createContext, useState, type SetStateAction } from "react";
import type { ReactNode } from "react";
import type { Drawing } from "../../../types/drawing";

type ModalProps = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
    selectedDrawing: Drawing,
    setSelectedDrawing: React.Dispatch<SetStateAction<Drawing>>
}


export const ModalContext = createContext<ModalProps>(null!);

export function ModalProvider({children}: {children: ReactNode}){

    const [isOpen, setIsOpen] = useState(false);
    const [ selectedDrawing, setSelectedDrawing] = useState<Drawing>(null!);

    return (
        <ModalContext.Provider value = {{isOpen, setIsOpen, selectedDrawing, setSelectedDrawing}}>
            {children}
        </ModalContext.Provider>
    )
}   