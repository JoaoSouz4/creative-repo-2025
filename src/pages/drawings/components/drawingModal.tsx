import { useModal } from "../hooks/useModal"
import { motion, AnimatePresence } from "motion/react";

export function DrawingModal(){
    const { close, selectedDrawing } = useModal();

    return (
        <AnimatePresence>
        <div className = 'backdrop-blur-sm z-100 bg-black/5 fixed top-0 left-0 w-full h-full flex items-center justify-center'>
                <motion.div
                    key={"modal"}
                    initial = {{ y: 30, opacity: 0}}
                    animate = {{y: 0, opacity: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                        duration: 0.4
                    }}
                    exit={{ y: 40, opacity: 0 }}
                    className = 'shadow-md flex relative max-w-[500px] w-full max-h-[1200px] h-[800px] bg-white rounded-2xl shadow-md mx-4'
                >
                    <div className = 'flex gap-4 flex-col p-4'>
                        <div className = 'pb-2'>
                            <div className ='text-xl font-bold'>
                                {selectedDrawing.name} | {selectedDrawing.universe}
                            </div>
                            <div className = 'text-gray-400 text-xs'>
                                Feito em: {selectedDrawing.date}
                            </div>
                        </div>
                        <img className = 'rounded-xl object-cover' src={selectedDrawing.imageUrl} alt="" />
                        <div className = 'flex flex-col grow overflow-hidden'>
                            <div className = ' overflow-y-auto p-4 grow bg-teal-50 text-teal-900 border border-teal-500/30 rounded-xl  '>
                                {selectedDrawing.description}
                            </div>
                        </div>
                    </div>
                    <div
                        className = ' cursor-pointer absolute top-4 right-8 font-bold border w-8 h-8  rounded-xl border-gray-400 text-gray-400 flex justify-center items-center cursor-pointer'
                        onClick = {close}
                    >
                        x
                    </div>
                </motion.div>
        </div>
        </AnimatePresence>
    )
}