import {
  type PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

import { useEventListener, useLocalStorage } from "usehooks-ts";
import { initialState } from "./constants";
import { isEmpty } from "./lib";
import { gameReducer } from "./reducer";

export const GameContext = createContext<GameContextType>({
  state: initialState,
  dispatch: () => null,
});

export function GameContextProvider({ children }: Readonly<PropsWithChildren>) {
  const [gameStore, dispatch] = useReducer(gameReducer, initialState);
  const [direction, setDirection] = useState<Direction>();

  const [localStorage, setLocalStorage] = useLocalStorage<GameState | null>(
    "2048-state",
    null,
  );

  useEventListener("keydown", (e: KeyboardEvent) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      const key: string = e.key;
      const newDirection = key.substring(5).toLowerCase() as Direction;
      setDirection(newDirection);
    }
  });

  function loadGame() {
    if (localStorage) dispatch({ type: "loadGame", state: localStorage });
    else if (isEmpty(gameStore.matrice)) dispatch({ type: "newGame" });
  }
  useEffect(() => {
    loadGame();
  }, []);

  useEffect(() => {
    if (direction) {
      dispatch({ type: "move", direction });
      setDirection(null);
    } else setLocalStorage(gameStore);
  }, [direction, gameStore, setLocalStorage]);

  const providerValue = useMemo(
    () => ({ state: gameStore, dispatch }),
    [gameStore],
  );

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
}
