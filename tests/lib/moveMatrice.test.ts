import { forTesting, move } from '@/lib/moveMatrice'
import { test, expect } from 'vitest'

const matrice =  () => [
    [8, 2, 0, 4],
    [8, 0, 8, 4],
    [8, 2, 0, 0],
    [8, 2 ,4, 4],
]

test('move matrice up', () => {
    let thisMatrice = matrice()
    let movedUp = move('up', thisMatrice)
    expect(movedUp).toBeTypeOf('object')
    expect(movedUp).toStrictEqual([
        [16, 4, 8, 8],
        [16, 2, 4, 4],
        [ 0, 0, 0, 0],
        [ 0, 0 ,0, 0],
    ])
})

test('move matrice down', () => {
    let thisMatrice = matrice()
    let movedUp = move('down', thisMatrice)
    expect(movedUp).toBeTypeOf('object')
    expect(movedUp).toStrictEqual([
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [16, 2, 8, 4],
        [16, 4 ,4, 8],
    ])
})

test('move matrice left', () => {
    let thisMatrice = matrice()
    let movedUp = move('left', thisMatrice)
    expect(movedUp).toBeTypeOf('object')
    expect(movedUp).toStrictEqual([
        [ 8, 2, 4, 0],
        [16, 4, 0, 0],
        [ 8, 2, 0, 0],
        [ 8, 2 ,8, 0],
    ])
})

test('move matrice right', () => {
    let thisMatrice = matrice()
    let movedUp = move('right', thisMatrice)
    expect(movedUp).toBeTypeOf('object')
    expect(movedUp).toStrictEqual([
        [0, 8,  2, 4],
        [0, 0, 16, 4],
        [0, 0,  8, 2],
        [0, 8 , 2, 8],
    ])
})

test('slide numbers', () => {
    let thisMatrice = matrice()

    expect(forTesting.slideNumbers(thisMatrice[0])).toStrictEqual([8, 2, 4, 0])
    expect(forTesting.slideNumbers(thisMatrice[1])).toStrictEqual([16, 4, 0, 0])
    expect(forTesting.slideNumbers(thisMatrice[2])).toStrictEqual([8, 2, 0, 0])
    expect(forTesting.slideNumbers(thisMatrice[3])).toStrictEqual([8, 2, 8, 0])
})