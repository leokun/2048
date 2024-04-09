import { fp } from "@/lib";
import { move } from ".";

let lastCall: LastCall;
export function populateEmptyTile(matrice: Matrice, forceNew = false): Matrice {
  if (isFull(matrice)) return matrice;

  const strMatrice = JSON.stringify(matrice);
  if (forceNew || lastCall?.matrice !== strMatrice) {
    const newMatrice = fp(matrice);
    const emptyTiles = getEmptyTiles(newMatrice);
    const selectedEmptyTileIndex = Math.floor(
      Math.random() * emptyTiles.length,
    );
    const [x, y] = emptyTiles[selectedEmptyTileIndex];
    newMatrice[y][x] = getRandomValue();

    lastCall = { matrice: strMatrice, result: newMatrice };
  }

  return lastCall.result;
}

export function isEmpty(matrice: Matrice): boolean {
  return getEmptyTiles(matrice).length === 16;
}

export function isFull(matrice: Matrice): boolean {
  return getEmptyTiles(matrice).length === 0;
}

export function isGameOver(matrice: Matrice): boolean {
  const [upMatrice] = move("up", matrice);
  const [downMatrice] = move("down", matrice);
  const [leftMatrice] = move("left", matrice);
  const [rightMatrice] = move("right", matrice);
  return (
    isFull(upMatrice) &&
    isFull(downMatrice) &&
    isFull(leftMatrice) &&
    isFull(rightMatrice)
  );
}

function getRandomValue(): number {
  const values = [2, 2, 2, 2, 2, 2, 4, 4];

  return values[Math.floor(Math.random() * values.length)];
}

function getEmptyTiles(matrice: Matrice): [number, number][] {
  const emptyTiles: [number, number][] = [];

  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      if (matrice[y][x] === 0) emptyTiles.push([x, y]);
    }
  }

  return emptyTiles;
}

export const _forTestingOnly = {
  getRandomValue,
  getEmptyTiles: getEmptyTiles,
};
