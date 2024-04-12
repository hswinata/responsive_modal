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

const closeButtons = document.querySelectorAll(".modal__close");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {
  activateNextDot();
  activateNextSlide();
});

prevButton.addEventListener("click", () => {
  activatePrevDot();
  activatePrevSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    activateDotByIndex(index);
    activateSlideByIndex(index);
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});
