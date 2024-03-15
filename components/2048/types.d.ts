type Matrice = number[][];
type Direction = null | 'up' | 'down' | 'left' | 'right'

type GameState = {
  matrice: Matrice;
  score: number;
};

type ReducerAction =
  | { type: "move", direction: Direction }
  | { type: "newGame" }

type GameContextType = {
  state: GameState,
  dispatch: Function
}

type LastCall = {matrice: string, result: Matrice}

type TileProps = {
  value: number
}
