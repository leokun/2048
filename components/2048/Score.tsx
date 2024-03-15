import { useContext } from "react"
import { GameContext } from "./context"

export default function Score() {

    const {state: {score}} = useContext(GameContext)

    return <div className="p4 h-12 bg-slate-900 flex items-center justify-center text-3xl box-content">
        Score: {score}
    </div>
}