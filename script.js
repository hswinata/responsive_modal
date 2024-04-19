import { closeModal } from "./js/modal.js";
import {
  slides,
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

const closeButtons = document.querySelectorAll(".modal__close");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

//Prev and next button functions
nextButton.addEventListener("click", (e) => {
  activateNextSlide();
  activateNextDot();
});

prevButton.addEventListener("click", (e) => {
  activatePrevSlide();
  activatePrevDot();
});

// Dot click functions
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    activateDotByIndex(index);
    activateSlideByIndex(index);
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

//Swipe functions
slides.forEach((slide) => {
  slide.addEventListener("touchstart", handleTouchStart, true);
  slide.addEventListener("touchmove", handleTouchMove, true);
  slide.addEventListener("touchend", handleTouchEnd, true);
});
