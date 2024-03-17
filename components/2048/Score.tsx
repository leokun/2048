import { useContext } from "react"
import { GameContext } from "./context"

export default function Score() {

    const {state: {score}} = useContext(GameContext)

    return <div className="bg-slate-900 flex items-center justify-center box-content">
        Score: {score}
    </div>
}