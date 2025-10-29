import { GalleryContainer } from "./components/galleryContainer";
import { ModalProvider } from "./context/modalContext";

export function Drawings(){
    return ( 
        <ModalProvider>
            <GalleryContainer />  
        </ModalProvider>
    )
}