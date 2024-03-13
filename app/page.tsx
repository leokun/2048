'use client'

import Matrice from "@/components/2048";
import { GameContextProvider } from "@/components/2048/context";

export default function Home() {

  return <GameContextProvider>
    <Matrice />
  </GameContextProvider>
}
