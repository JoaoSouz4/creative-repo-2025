import { motion } from "motion/react"
import { useModal } from "../hooks/useModal"
import type { Drawing } from "../../../types/drawing";


interface DrawingCardProps extends Drawing {
    width: number
}

export function DrawingCard(props: DrawingCardProps){
    const { open } = useModal();
    const { name, date, imageUrl, width } = props;
    return (
        <motion.div
            onClick = {() => open(props)}
            whileHover={{
                y: -10,
                boxShadow: "0px 3px 5px rgba(107, 231, 217, 0.5)",
                transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    duration: 0.3, 
            },
        }}
       
            style={width >= 500 ? {width:`${width / 3 - 7}px`}: {width: `calc(100% - 8px) `}}
            //className = {`hover:cursor-pointer snap-center flex-shrink-0 bg-white px-2 pt-2 pb-4 shadow-md rounded-sm`}>
            className = {`snap-center hover:cursor-pointer flex-shrink-0 bg-white px-2 pt-2 pb-4 shadow-md rounded-sm`}>
            <img
                className = 'rounded-md border border-gray-200 ' 
                src={imageUrl} alt={name} 
            />

            <div className = 'text-center'>
                <h3 className="text-teal-600 ">
                    {name}
                </h3>
                <h4 className="text-gray-400 text-xs">
                    {date}
                </h4>
            </div>
        </motion.div>
    )
}