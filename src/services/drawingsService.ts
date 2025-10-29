import drawings from '../data/draws.json';
import type { Drawing, DrawingsCollections } from '../types/drawing';


export function getAllDrawings() {

    let drawingsCollections: DrawingsCollections[] = [];
    let groups: string[] = [];

    for (let i = 0; i < drawings.length; i++) {
        const drawing = drawings[i];
        const universe = drawings[i].universe;

        if (!groups.includes(universe)) {
            createGroup(drawing, drawingsCollections, groups);
        } else {
            const group = drawingsCollections.find( g => g.groupName === universe);
            group?.drawings.push(drawing)
        };
    }

    return drawingsCollections;
}

function createGroup(drawing: Drawing, drawingsCollections: DrawingsCollections[], groups: string[]){
    groups.push(drawing.universe);

    drawingsCollections.push({
        id: drawingsCollections.length + 1,
        groupName: drawing.universe,
        drawings: [drawing],
    })
}
