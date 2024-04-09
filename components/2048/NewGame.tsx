import { useContext } from "react";

import { Button } from "@/components/ui";
import { GameContext } from "./context";

export default function NewGame() {
  const { dispatch } = useContext(GameContext);

  return (
    <Button
      onClick={() => {
        dispatch({ type: "newGame" });
      }}
    >
      New Game
    </Button>
  );
}
