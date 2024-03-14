'use client'

import Matrice from "@/components/2048";
import Score from "@/components/2048/Score";
import { GameContextProvider } from "@/components/2048/context";

export default function Home() {

  return <GameContextProvider>
    <Score/>
    <Matrice />
  </GameContextProvider>
}
