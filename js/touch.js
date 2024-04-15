import { activateNextSlide, activatePrevSlide } from "./slide.js";
import { activateNextDot, activatePrevDot } from "./dot.js";

const treshhold = 50;
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

  //Only activate swipe when absDistX is bigger than 50 to avoid accidental swipes
  if (absDistX > treshhold) {
    //Horizontal swipe gesture detected
    if (absDistX > absDistY) {
      if (distX > 0) {
        //swipeRight
        activatePrevSlide();
        activatePrevDot();
      } else {
        //swipeLeft
        activateNextSlide();
        activateNextDot();
      }
    }
  }
}
