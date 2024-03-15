export function total(matrice: Matrice): number {
    return matrice.flat().reduce((total, current) => total + current,0)
}