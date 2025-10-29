import { useDrawings } from "../hooks/useDrawings"
import { Gallery } from "./gallery";
import type { DrawingsCollections } from "../../../types/drawing";
import { GalleryProvider } from "../context/galleryContext";
import { DrawingModal } from "./drawingModal";
import { useModal } from "../hooks/useModal";

export function GalleryContainer(){

    const { drawings: drawingsCollections } = useDrawings();
    const { isOpen } = useModal();

    return (

        <section className = 'flex flex-col gap-5 mt-4'>
            {
                drawingsCollections.map((collection: DrawingsCollections) => {
                    return (
                        <GalleryProvider key={collection.groupName}>
                            <Gallery
                                groupName = {collection.groupName}
                                drawingsList = {collection.drawings}
                            />
                        </GalleryProvider>
                    )
                })
            }
            {isOpen && <DrawingModal />}
        </section>
    )
}