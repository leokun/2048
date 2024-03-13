import { isEmpty, populateEmptyTile } from "@/lib/matrice/emptySpaces";
import { Direction, move } from "@/lib/matrice/move";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

type Matrice = number[][]

type GameStore = {
    matrice: Matrice
    score: number
}

export const GameContext = createContext({matrice: null, score: 0})

export function GameContextProvider({children}: PropsWithChildren) {

    const [gameStore, setGameStore] = useState({
        matrice: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0 ,0, 0],
      ],
      score: 0
    })
    
      const handleKeyDown = (e: any | KeyboardEvent) => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
          const key: string = e.key
          const direction = key.substring(5).toLowerCase() as Direction
          const newMatrice = move(direction, gameStore.matrice)
          setGameStore({...gameStore, matrice: populateEmptyTile(newMatrice)})
        }
      }
    
      useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
    
        // moved from default value of useState to avoid hydratation mismatch
        isEmpty(gameStore.matrice) && setGameStore({...gameStore, matrice: populateEmptyTile(gameStore.matrice)})
    
        return () => document.removeEventListener("keydown", handleKeyDown)
      }, [])


    return <GameContext.Provider value={gameStore}>
    {children}
  </GameContext.Provider>
}

