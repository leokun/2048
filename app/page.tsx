'use client'

import { 
  Matrice,
  NewGame,
  Score,
  GameContextProvider
} from "@/components/2048"

export default function Home() {

  return <GameContextProvider>
    <div className="grid text-xl gap-2">
      <div className="grid grid-cols-2 gap-4 pt-24">

        <NewGame /><Score/>
      </div>
    <Matrice />
    </div>
    
  </GameContextProvider>
}
