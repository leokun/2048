import { fp } from "@/lib"


export function move(direction: Direction, matrice: Matrice): [Matrice, number] {
    let newMatrice: Matrice = fp(matrice)
    let scoreIncrement = 0
    if (direction == 'up') {
        for(let column=0; column <4; column++) {
            let [newColumn, inc] = slideNumbers([
                newMatrice[0][column],
                newMatrice[1][column],
                newMatrice[2][column],
                newMatrice[3][column],
            ])
            newMatrice[0][column] = newColumn[0]
            newMatrice[1][column] = newColumn[1]
            newMatrice[2][column] = newColumn[2]
            newMatrice[3][column] = newColumn[3]
            scoreIncrement += inc
        }
    }
    if (direction == 'down') {
        for(let column=0; column <4; column++) {
            let [newColumn, inc] = slideNumbers([
                newMatrice[3][column],
                newMatrice[2][column],
                newMatrice[1][column],
                newMatrice[0][column],
            ])
            newMatrice[0][column] = newColumn[3]
            newMatrice[1][column] = newColumn[2]
            newMatrice[2][column] = newColumn[1]
            newMatrice[3][column] = newColumn[0]
            scoreIncrement += inc
        }
    }
    if (direction == 'left') {
        for(let row=0; row <4; row++) {
            let [newRow, inc] = slideNumbers(newMatrice[row])
            newMatrice[row] = newRow
            scoreIncrement += inc
        }
    }
    if (direction == 'right') {
        for(let row=0; row <4; row++) {
            let [newRow, inc] = slideNumbers(newMatrice[row].toReversed())
            newMatrice[row] = newRow.toReversed()
            scoreIncrement += inc
        }
    }

    return [newMatrice, scoreIncrement]
}

function slideNumbers(numbers: number[]): [number[], number] {
    let newNumbers: number[] = [0, 0, 0, 0]
    let currentindex = 0
    let scoreIncrement = 0
    for (let index=0; index <4; index++) {
        let currentNumber = numbers[index]
        if (currentNumber) {
            if (currentindex && (newNumbers[currentindex-1] == currentNumber)) {
                newNumbers[currentindex-1] = currentNumber*2
                scoreIncrement += currentNumber*2
            } 
            else {
                newNumbers[currentindex] = currentNumber
                currentindex ++
            }
        }
    }

    return [newNumbers, scoreIncrement]
}

export const forTesting = {
    slideNumbers
}

