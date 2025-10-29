import { getAllDrawings } from "../../../services/drawingsService";

export function useDrawings(){
    return {
        drawings: getAllDrawings()
    }
}