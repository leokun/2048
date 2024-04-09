import { _forTestingOnly } from "@/lib/matrice/emptySpaces";
import { expect, test } from "vitest";

const matrice = () => [
  [8, 2, 0, 4],
  [8, 0, 8, 4],
  [8, 2, 0, 0],
  [8, 2, 4, 4],
];

test("get empty spaces", () => {
  const thisMatrice = matrice();
  const emptySpaces: [number, number][] =
    _forTestingOnly.getEmptyTiles(thisMatrice);
  expect(emptySpaces).toBeTypeOf("object");
  expect(emptySpaces).toStrictEqual([
    [2, 0],
    [1, 1],
    [2, 2],
    [3, 2],
  ]);
});
