'use client'

import { useContext } from "react";

import Tile from "./Tile";
import { GameContext } from "./context";
import EndOfGame from "./EndOfGame";

export default function Matrice() {

  const {state: {matrice, endOfGame}} = useContext(GameContext)

  return (
    <div
    className="relative h-80 w-80 bg-slate-900">
      <div className=" absolute grid grid-cols-4 gap-4 p-4 h-80 w-80">
      {matrice.flat().map((cell, index) => (
        <Tile key={'lol-'+index} value={cell} />
    ))}</div>
    {endOfGame && <EndOfGame />}
    </div>
  )
}
