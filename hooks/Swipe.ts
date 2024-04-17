import { useEffect, useState } from "react";
import { useEventListener } from "usehooks-ts";

/**
 * Custom hook for handling swipe gestures.   
 * Carrefull it depends on `usehooks-ts` => `npm install usehooks-ts`
 * 
 * Inspired from Stackoverflow
 * @link https://stackoverflow.com/a/23230280
 * 
 * @param {Function} customHandleSwipe - an optional function to handle swipe direction
 * @return {Direction} the current direction of the swipe
 * 
 * @example
 * export default function OneDirection() {
 *   // This component will render only if direction is different from last one
 *   const direction = useSwipe();
 *
 *   // This way you may log every swipes
 *   useSwipe((direction) => console.log(direction));
 *
 *   return <div>{direction}</div>;
 * }
 */
export default function useSwipe(
  customHandleSwipe?: (direction: Direction) => void,
) {
  const [direction, setDirection] = useState<Direction>(null);
  let xDown = 0;
  let yDown = 0;
  let xDiff = 0;
  let yDiff = 0;

  function getTouches(evt: TouchEvent) {
    return evt.touches[0] || evt.changedTouches[0];
  }

  function handleSwipe(direction: Direction) {
    setDirection(direction);
    if (customHandleSwipe) customHandleSwipe(direction);
  }

  useEventListener("touchstart", (e) => {
    e.preventDefault();
    const { clientX, clientY } = getTouches(e);
    xDown = clientX;
    yDown = clientY;
  });

  useEffect(() => {
    console.log("direction", direction);
  }, [direction]);

  useEventListener("touchend", (e) => {
    e.preventDefault();
    const { clientX, clientY } = getTouches(e);
    xDiff = xDown - clientX;
    yDiff = yDown - clientY;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        handleSwipe("left");
      } else {
        handleSwipe("right");
      }
    } else {
      if (yDiff > 0) {
        handleSwipe("up");
      } else {
        handleSwipe("down");
      }
    }
    /* reset values */
    xDown = 0;
    yDown = 0;
  });

  return direction;
}
