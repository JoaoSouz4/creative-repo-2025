import { useContext } from "react";
import { GalleryContext } from "../context/galleryContext";

export function useGallery() {
  const context = useContext(GalleryContext);

  if (!context) {
    throw new Error("useGallery deve ser usado dentro de um <GalleryProvider>");
  }

  return context;
}
