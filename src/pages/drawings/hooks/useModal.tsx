import { useContext } from "react"
import { ModalContext } from "../context/modalContext"
import type { Drawing } from "../../../types/drawing";

export function useModal(){
    const context = useContext(ModalContext);
    if(!context){
        throw new Error("Error")
    }

    const { isOpen, setIsOpen, setSelectedDrawing, selectedDrawing } = context;

    function close(){
        setIsOpen(false)
    }

    function open(drawing: Drawing){
        setIsOpen(true);
        setSelectedDrawing(drawing)
    }
    return {
        isOpen, open, close, selectedDrawing
    }
}