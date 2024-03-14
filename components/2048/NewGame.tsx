import { useContext } from "react"

import { GameContext } from "./context"

export default function NewGame() {

    const {dispatch} = useContext(GameContext)

    return <button
        className="p4 h-12 bg-slate-900 flex items-center justify-center text-3xl box-content"
        onClick={() => {
            dispatch({type: "newGame"})
        }}
    >
        Reset Game
    </button>

}