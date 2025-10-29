import { useGallery } from "../hooks/useGallery";
import { GalleryNavigateAction } from "./galleryNavigateAction";

export function GalleryNavigate(){

    const { next, back } = useGallery();

    return (
        <div className = 'flex gap-1'>
            <GalleryNavigateAction action = {back} direction="back"/>
            <GalleryNavigateAction action = {next} direction="next"/>
        </div>
    )
}