import { useState } from "react";
import { useEventListener } from "usehooks-ts";

/**
 *
 * inspired from https://stackoverflow.com/a/23230280
 */
export default function useSwipe() {
  const [direction, setDirection] = useState<Direction>(null);
  let xDown = 0;
  let yDown = 0;
  let xDiff = 0;
  let yDiff = 0;

  function getTouches(evt: TouchEvent) {
    return evt.touches[0] || evt.changedTouches[0];
  }

  useEventListener("touchstart", (e) => {
    const { clientX, clientY } = getTouches(e);
    xDown = clientX;
    yDown = clientY;
  });

  useEventListener("touchend", (e) => {
    const { clientX, clientY } = getTouches(e);
    xDiff = xDown - clientX;
    yDiff = yDown - clientY;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        setDirection("left");
      } else {
        setDirection("right");
      }
    } else {
      if (yDiff > 0) {
        setDirection("up");
      } else {
        setDirection("down");
      }
    }
    /* reset values */
    xDown = 0;
    yDown = 0;
  });

  return direction;
}
