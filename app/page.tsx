'use client'

import { 
  Matrice,
  NewGame,
  Score,
  GameContextProvider
} from "@/components/2048"

export default function Home() {

  return <GameContextProvider>
    <NewGame /><Score/>
    <Matrice />
  </GameContextProvider>
}
