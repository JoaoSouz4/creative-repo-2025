import type { Drawing} from "../../../types/drawing"
import { DrawingCard } from "./drawingCard"
import { GalleryNavigate } from "./galleryNavigate"
import { useGallery } from "../hooks/useGallery";

interface GalleryProps {
    groupName: string,
    drawingsList: Drawing[]
}

export function Gallery({groupName, drawingsList}: GalleryProps){

    const { scrollRef, galleryRef, cardWidth } = useGallery();

    return (
        <div>
            <div className = 'flex items-center justify-between'>
                <h2 className = 'text-xl font-bold text-gray-500'>{groupName}</h2>
                <GalleryNavigate/>
            </div>

            <div
                ref = {galleryRef}
                className = 'py-2'
            >
                <div
                    ref = {scrollRef} 
                    className = 'py-2 flex gap-2 items-center overflow-x-hidden scroll-smooth snap-mandatory'>
                    {   
                        drawingsList.map((drawing: Drawing) => {
                            return (
                                <DrawingCard 
                                    key={drawing.id}
                                    id = {drawing.id}
                                    description = {drawing.description}
                                    universe = {drawing.universe}
                                    name={drawing.name}
                                    imageUrl={drawing.imageUrl}
                                    date={drawing.date}
                                    width = {cardWidth}
                                />
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}