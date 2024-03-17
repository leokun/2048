'use client'

import { useContext } from "react";

import { GameContext } from "./context";

export default function EndOfGame() {

  const {state: {score}} = useContext(GameContext)
  return (
    <div
    className="absolute flex items-center justify-center text-3xl text-center box-content h-80 w-80 bg-slate-400 bg-opacity-75">
      End of the game !<br />
      Score: {score}
    </div>
  )
}
