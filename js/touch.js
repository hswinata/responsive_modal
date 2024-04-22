import { activateSlide } from "./slide.js";
import { activateDot } from "./dot.js";

const treshold = 5;
let startX = 0;
let startY = 0;
let distX = 0;
let distY = 0;

export function handleTouchStart(e) {
  //Get the touch position relative to the viewport
  const touch = e.touches[0];

  startX = touch.clientX;
  startY = touch.clientY;
}

export function handleTouchMove(e) {
  //Prevent the default scrolling behavior, esp on browsers.
  e.preventDefault();

  const touch = e.touches[0];
  const currentX = touch.clientX;
  const currentY = touch.clientY;

  //Calculate the distance moved horizontally and vertically
  distX = currentX - startX;
  distY = currentY - startY;
}

export function handleTouchEnd(e) {
  const absDistX = Math.abs(distX);
  const absDistY = Math.abs(distY);

  //Only activate swipe when absDistX is bigger than treshold to avoid accidental swipes
  if (absDistX > treshold) {
    //Horizontal swipe gesture detected
    if (absDistX > absDistY) {
      if (distX > 0) {
        //swipeRight
        activateSlide("prev");
        activateDot();
      } else {
        //swipeLeft
        activateSlide("next");
        activateDot();
      }
    }
  }

  // Reset distX and distY to 0 after each swipe ends
  distX = 0;
  distY = 0;
}
