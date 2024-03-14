import { isEmpty, populateEmptyTile } from "@/lib/matrice/emptySpaces";
import { Direction, move } from "@/lib/matrice/move";
import {
  PropsWithChildren,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Matrice from ".";
import { fp } from "@/lib";
import { total } from "@/lib/matrice/sub";

type Matrice = number[][];

type GameState = {
  matrice: Matrice;
  score: number;
};

const initialState = {
    matrice: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    score: 0,
  }

export const GameContext = createContext<GameState>({ matrice: [], score: 0 });

export function GameContextProvider({ children }: PropsWithChildren) {
  const [gameStore, dispatch] = useReducer(gameReducer, initialState );
  const [direction, setDirection] = useState<Direction>(); 

  useEffect(() => {
    function handleKeyDown(e: any | KeyboardEvent) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
            const key: string = e.key;
            const newDirection = key.substring(5).toLowerCase() as Direction;
            setDirection(newDirection);
        }
    };
    document.addEventListener("keydown", handleKeyDown);

    isEmpty(gameStore.matrice) && dispatch({ type: "newGame" });

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (direction) {
         dispatch({ type: "move", direction })
         setDirection(null)
    }
  }, [direction]);

  return (
    <GameContext.Provider value={gameStore}>{children}</GameContext.Provider>
  );
}

type ReducerAction =
  | { type: "move"; direction: Direction }
  | { type: "newGame" };

function gameReducer(state: GameState, action: ReducerAction): GameState {
  let currentMatrice
  switch (action.type) {
    case "move":
      currentMatrice = fp(populateEmptyTile(move(action.direction, state.matrice)))
      return {
        ...state,
        matrice: currentMatrice,
        score: total(currentMatrice)
      };

    case "newGame":
      currentMatrice = fp(populateEmptyTile(initialState.matrice))
      return { 
        ...initialState,
        matrice: currentMatrice,
        score: total(currentMatrice)
      };
  }
}


