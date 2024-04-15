import { closeModal } from "./js/modal.js";
import {
  activateNextSlide,
  activatePrevSlide,
  activateSlideByIndex,
} from "./js/slide.js";
import {
  dots,
  activateNextDot,
  activatePrevDot,
  activateDotByIndex,
} from "./js/dot.js";

import {
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
} from "./js/touch.js";

const modal = document.querySelector(".modal");
const closeButtons = document.querySelectorAll(".modal__close");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

//Swipe functions
modal.addEventListener("touchstart", handleTouchStart);
modal.addEventListener("touchmove", handleTouchMove);
modal.addEventListener("touchend", handleTouchEnd);

//Prev and next functions
nextButton.addEventListener("click", () => {
  activateNextDot();
  activateNextSlide();
});

prevButton.addEventListener("click", () => {
  activatePrevDot();
  activatePrevSlide();
});

//Click dot functions
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    activateDotByIndex(index);
    activateSlideByIndex(index);
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});
