export function total(matrice: number[][]): number {
    return matrice.flat().reduce((total, current) => total + current,0)
}