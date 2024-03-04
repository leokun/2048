'use client'
import { isEmpty, populateEmptyTile } from "@/lib/matrice/emptySpaces";
import { Direction, move } from "@/lib/matrice/move";
import { KeyboardEvent, useEffect, useState } from "react";
import bgStiles from './Tile.module.css';
import Tile from "./Tile";

export default function Matrice() {

  const [matrice, setMatrice] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0 ,0, 0],
  ])

  const handleKeyDown = (e: any | KeyboardEvent) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      const key: string = e.key
      const direction = key.substring(5).toLowerCase() as Direction
      const newMatrice = move(direction, matrice)
      setMatrice(populateEmptyTile(newMatrice))
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)

    // moved from default value of useState to avoid hydratation mismatch
    isEmpty(matrice) && setMatrice(populateEmptyTile(matrice))

    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div
    className="grid grid-cols-4 gap-4 p-4 h-80 w-80 bg-slate-900">
      {matrice.flat().map((cell, index) => (
        <Tile key={index} value={cell} />
      ))}
    </div>
  )
}
