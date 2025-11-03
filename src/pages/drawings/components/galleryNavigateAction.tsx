import { IoIosArrowForward } from "react-icons/io";

interface GalleryNavigateActionProps {
    direction: 'back' | 'next',
    action: () => void
}

export function GalleryNavigateAction({direction, action}: GalleryNavigateActionProps){

    return (
        <button
            onClick={action}
            className = 'dark:hover:text-neutral-800 dark:bg-neutral-800 cursor-pointer hover:bg-teal-500 hover:text-white bg-transparent border border-teal-400 rounded-md text-sm text-teal-400 w-8 h-8 flex justify-center items-center'
        >
            <IoIosArrowForward
                className = {direction == 'back' ? 'rotate-180' : ''}
            />
        </button>
    )
}