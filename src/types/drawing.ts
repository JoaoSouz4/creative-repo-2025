export type Drawing = {
    id: number,
    name: string,
    date: string,
    imageUrl: string,
    description: string,
    universe: string,
}

export interface DrawingsCollections {
    id: number,
    groupName: string,
    drawings: Drawing[]
}