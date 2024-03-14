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

    console.log(`PuseEffect pre newGame ${gameStore.matrice}`)
    // moved from default value of useState to avoid hydratation mismatch
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
  switch (action.type) {
    case "move":
      return {
        ...state,
        matrice: fp(populateEmptyTile(move(action.direction, state.matrice))),
      };

    case "newGame":
      return { ...initialState, matrice: fp(populateEmptyTile(initialState.matrice)) };
  }
}


