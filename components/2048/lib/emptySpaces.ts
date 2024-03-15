import { fp } from "@/lib";

let lastCall: LastCall
export function populateEmptyTile(matrice: Matrice, forceNew: boolean = false): Matrice {
    if (isFull(matrice)) return matrice
    
    let strMatrice = JSON.stringify(matrice)
    if (forceNew || lastCall?.matrice != strMatrice) {
        const newMatrice = fp(matrice)
        const emptyTiles = getEmptyTiles(newMatrice)
        const selectedEmptyTileIndex = Math.floor(Math.random() * emptyTiles.length);
        const [x,y] = emptyTiles[selectedEmptyTileIndex]
        newMatrice[y][x] = getRandomValue()

        lastCall = {matrice: strMatrice, result: newMatrice}
    }
    
    return lastCall.result
}


export function isEmpty(matrice: Matrice): boolean {
    return getEmptyTiles(matrice).length == 16
}


export function isFull(matrice: Matrice): boolean {
    return getEmptyTiles(matrice).length == 0
}




function getRandomValue(): number {
    const values = [2,2,2,2,2,2,4,4,]

    return values[Math.floor(Math.random() * values.length)]
}

function getEmptyTiles(matrice: Matrice): [number, number][] {
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