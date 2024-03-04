export type Direction = 'up' | 'down' | 'left' | 'right'

export function move(direction: Direction, matrice: number[][]): number[][] {
    let newMatrice: number[][] = matrice

    if (direction == 'up') {
        for(let column=0; column <4; column++) {
            let newColumn = slideNumbers([
                matrice[0][column],
                matrice[1][column],
                matrice[2][column],
                matrice[3][column],
            ])
            newMatrice[0][column] = newColumn[0]
            newMatrice[1][column] = newColumn[1]
            newMatrice[2][column] = newColumn[2]
            newMatrice[3][column] = newColumn[3]
        }
    }
    if (direction == 'down') {
        for(let column=0; column <4; column++) {
            let newColumn = slideNumbers([
                matrice[3][column],
                matrice[2][column],
                matrice[1][column],
                matrice[0][column],
            ])
            newMatrice[0][column] = newColumn[3]
            newMatrice[1][column] = newColumn[2]
            newMatrice[2][column] = newColumn[1]
            newMatrice[3][column] = newColumn[0]
        }
    }
    if (direction == 'left') {
        for(let row=0; row <4; row++) {
            newMatrice[row] = slideNumbers(matrice[row])
        }
    }
    if (direction == 'right') {
        for(let row=0; row <4; row++) {
            newMatrice[row] = slideNumbers(matrice[row].reverse()).reverse()
        }
    }

    return newMatrice
}

function slideNumbers(numbers: number[]): number[] {
    let newNumbers: number[] = [0, 0, 0, 0]
    let currentindex = 0
    for (let index=0; index <4; index++) {
        let currentNumber = numbers[index]
        if (currentNumber) {
            if (currentindex && (newNumbers[currentindex-1] == currentNumber)) {
                newNumbers[currentindex-1] = currentNumber*2
            } 
            else {
                newNumbers[currentindex] = currentNumber
                currentindex ++
            }
        }
    }

    return newNumbers
}

export const forTesting = {
    slideNumbers
}

