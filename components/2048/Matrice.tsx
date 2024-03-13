'use client'

import { useContext } from "react";

import Tile from "./Tile";
import { GameContext } from "./context";

export default function Matrice() {

  const gameStore = useContext(GameContext)
  return (
    <div
    className="grid grid-cols-4 gap-4 p-4 h-80 w-80 bg-slate-900">
      {gameStore.matrice.flat().map((cell, index) => (
        <Tile key={index} value={cell} />
      ))}
    </div>
  )
}
