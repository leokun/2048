"use client";

import { useContext } from "react";

import { v1 as uuid } from "uuid";
import EndOfGame from "./EndOfGame";
import Tile from "./Tile";
import { GameContext } from "./context";

export default function Matrice() {
  const {
    state: { matrice, endOfGame },
  } = useContext(GameContext);

  return (
    <div className="relative h-80 w-80 bg-slate-900 mt-2 touch-none">
      <div className=" absolute grid grid-cols-4 gap-4 p-4 h-80 w-80">
        {matrice.flat().map((cell) => (
          <Tile key={uuid()} value={cell} />
        ))}
      </div>
      {endOfGame && <EndOfGame />}
    </div>
  );
}
