import {
  PropsWithChildren,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { isEmpty } from  "./lib";
import { initialState } from "./constants";
import { gameReducer } from "./reducer";


export const GameContext = createContext<GameContextType>({
  state: initialState,
  dispatch: ()=>null}
);
  

export function GameContextProvider({ children }: Readonly<PropsWithChildren>) {

  const [gameStore, dispatch] = useReducer(gameReducer, initialState );
  const [direction, setDirection] = useState<Direction>(); 

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
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
    <GameContext.Provider value={{state: gameStore, dispatch}}>{children}</GameContext.Provider>
  );
}
