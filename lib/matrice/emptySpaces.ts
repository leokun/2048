import { fp } from "@/lib";

export function populateEmptyTile(matrice: number[][]): number[][] {
    if (isFull(matrice)) return matrice
    
    const newMatrice = fp(matrice)
    const emptyTiles = getEmptyTiles(newMatrice)
    const selectedEmptyTileIndex = Math.floor(Math.random() * emptyTiles.length);
    const [x,y] = emptyTiles[selectedEmptyTileIndex]
    newMatrice[y][x] = getRandomValue()

    return newMatrice
}


export function isEmpty(matrice: number[][]): boolean {
    return getEmptyTiles(matrice).length == 16
}


export function isFull(matrice: number[][]): boolean {
    return getEmptyTiles(matrice).length == 0
}




function getRandomValue(): number {
    const values = [2,2,2,2,2,2,4,4,]

    return values[Math.floor(Math.random() * values.length)]
}

function getEmptyTiles(matrice: number[][]): [number, number][] {
    let emptyTiles: [number, number][] = []

    for (let y=0; y <4; y++) {
        for (let x=0; x <4; x++) {
            if (matrice[y][x] == 0) emptyTiles.push([x, y])
        }
    }

    return emptyTiles
}

export const _forTestingOnly = {
    getRandomValue,
    getEmptyTiles: getEmptyTiles
}