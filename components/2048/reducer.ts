import { fp } from "@/lib";
import { initialState } from "./constants";
import { isFull, move, populateEmptyTile, total } from "./lib";



export function gameReducer(state: GameState, action: ReducerAction): GameState {
  
  let actionInfo = action.type
  if (action.type == 'move') actionInfo += ` ${action.direction}`
  console.info(`trigger action: ${actionInfo}`)


  let currentMatrice = state.matrice
  switch (action.type) {
    
    case "move": {

      const prevStringified = JSON.stringify(state.matrice)
      const newMatrice = move(action.direction, state.matrice)

      // matrice should stay the same if no move possible
      if (JSON.stringify(newMatrice) != prevStringified){
        currentMatrice = fp(populateEmptyTile(newMatrice))
      }

      return {
        matrice: currentMatrice,
        score: total(currentMatrice),
        endOfGame: isFull(currentMatrice),
      }
    }
      
    case "newGame": {
      currentMatrice = fp(populateEmptyTile(initialState.matrice, true))
      
      return { 
        matrice: currentMatrice,
        score: total(currentMatrice),
        endOfGame: false,
      }
    }

    case "loadGame": {
      currentMatrice = fp(populateEmptyTile(action.state.matrice, true))
      
      return { 
        ...action.state,
        matrice: currentMatrice,
        score: total(currentMatrice),
      }
    }

  }
}


