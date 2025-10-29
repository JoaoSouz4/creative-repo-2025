import { useRef, createContext, type ReactNode, useState, useEffect } from "react"


interface GalleryContextType {
    next: () => void,
    back: () => void,
    cardWidth: number,
    scrollRef: React.RefObject<HTMLDivElement>,
    galleryRef: React.RefObject<HTMLDivElement>,
}

export const GalleryContext = createContext<GalleryContextType | null>(null);

export function GalleryProvider({children}: {children: ReactNode}){

    const scrollRef = useRef<HTMLDivElement>(null!);
    const galleryRef = useRef<HTMLDivElement>(null!);
    const [cardWidth, setCardWidth] = useState<number>(0);

    useEffect(() => {
            function updateWidth(){
                if(galleryRef.current){
                    setCardWidth(galleryRef.current.scrollWidth);
                }
            }
    
            updateWidth();
            window.addEventListener("resize", updateWidth);
            return () => window.removeEventListener("resize", updateWidth)
        }, []
    );
    
    function next() {
        if (!scrollRef.current) return;
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        scrollRef.current.scrollTo({
            left: Math.min(scrollRef.current.scrollLeft + galleryRef.current.scrollWidth, maxScroll),
            behavior: "smooth"
        });
        console.log('next()| galleryWidth: ', galleryRef.current.scrollWidth)
    }
    
    function back() {
        if (!scrollRef.current) return;
        scrollRef.current.scrollTo({
            left: Math.max(scrollRef.current.scrollLeft - galleryRef.current.scrollWidth, 0),
            behavior: "smooth"
        });
        console.log('back()| galleryWidth: ', galleryRef.current.scrollWidth)
    }

    return (
        <GalleryContext.Provider value = {{galleryRef, scrollRef, next, back, cardWidth}}>
            {children}
        </GalleryContext.Provider>
    )
}