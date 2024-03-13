import { isEmpty, populateEmptyTile } from "@/lib/matrice/emptySpaces";
import { Direction, move } from "@/lib/matrice/move";
import { createContext, useEffect, useState } from "react";


export const GameContext = createContext(null)

export function GameContextProvider({children}) {

    const [matrice, setMatrice] = useState([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0 ,0, 0],
      ])
    
      const handleKeyDown = (e: any | KeyboardEvent) => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
          const key: string = e.key
          const direction = key.substring(5).toLowerCase() as Direction
          const newMatrice = move(direction, matrice)
          setMatrice(populateEmptyTile(newMatrice))
        }
      }
    
      useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
    
        // moved from default value of useState to avoid hydratation mismatch
        isEmpty(matrice) && setMatrice(populateEmptyTile(matrice))
    
        return () => document.removeEventListener("keydown", handleKeyDown)
      }, [])


    return <GameContext.Provider value={matrice}>
    {children}
  </GameContext.Provider>
}

