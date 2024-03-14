import { fp } from "@/lib";
import { initialState } from "./constants";
import { move, populateEmptyTile, total } from "./lib";



export function gameReducer(state: GameState, action: ReducerAction): GameState {

  let currentMatrice = state.matrice
  switch (action.type) {
    case "move":
      const prevStringified = JSON.stringify(state.matrice)
      const newMatrice = move(action.direction, state.matrice)

      if (JSON.stringify(newMatrice) != prevStringified){
        currentMatrice = fp(populateEmptyTile(newMatrice))
      }
      return {
        ...state,
        matrice: currentMatrice,
        score: total(currentMatrice),
      };

    case "newGame":
      console.log('new game')
      currentMatrice = fp(populateEmptyTile(initialState.matrice, true))
      let ret = { 
        ...initialState,
        matrice: currentMatrice,
        score: total(currentMatrice),
      };
      return ret
  }
}


