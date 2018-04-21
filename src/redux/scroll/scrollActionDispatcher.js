import {
  scrolling,
  updateDirectionAction,
} from "./scrollActions";

import {
  scrollDown,
  scrollUp,
  setForwardDirection,
} from "../../helper/scroll.js";

let interval = 0;

/**
 * Clear interval if it's still up
 */
function stopInterval() {
  clearInterval(interval);
}

/** 
 * Start scrolling on load.
*/
export function beginScroll() {
  console.log("Scrolling", "Before return")
  return (dispatch, getState) => {
    console.log("hello", "From within return")
    interval = setInterval(scroll, 30);
    dispatch(updateDirectionAction(setForwardDirection(getState().scroll.direction)));
    function scroll() {
      console.log("Scrolling", "From scroll fucntion")
      dispatch(scrolling(
        scrollUp(
          getState().scroll.position,
          true
        )
      )
      )
    }
  }
}

/** 
 * User is hovering over text. 
 * Stopping auto-scroll
*/
export function stopScroll() {
  clearInterval(interval);
}

/** 
 * User is hovering over text. 
 * Stopping auto-scroll
*/
export function scrollingManual() {
  return (dispatch, getState) => {
    console.log("Manual")

    stopInterval();
  }
}

/** 
 * User is maunaully scrolling down
 * Dispatch new position
*/
export function scrollingManualDown() {
  return (dispatch, getState) => {
    dispatch(
      scrolling(
        scrollDown(
          getState().scroll.position
        )
      )
    )
  }
}


/** 
 * User is maunaully scrolling up
 * Dispatch new position
*/
export function scrollingManualUp() {
  return (dispatch, getState) => {
    dispatch(
      scrolling(
        scrollUp(
          getState().scroll.position
        )
      )
    )
  }
}

export function updateDirectionActionDispatcher(newScrollDirection) {
  return (dispatch) => {
    dispatch(updateDirectionAction(newScrollDirection));
  }
}