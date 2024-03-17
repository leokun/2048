import { useContext } from "react"

import { GameContext } from "./context"
import { Button } from "@/components/ui"

export default function NewGame() {

    const {dispatch} = useContext(GameContext)

    return <Button
        onClick={() => {
            dispatch({type: "newGame"})
        }}
    >
        New Game
    </Button>

}