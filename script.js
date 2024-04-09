import { closeModal } from "./js/modal.js";
import { activateNextSlide, activatePrevSlide } from "./js/slide.js";
import { activateNextDot, activatePrevDot } from "./js/dot.js";

const closeButtons = document.querySelectorAll(".modal__close");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

next.addEventListener("click", () => {
  activateNextDot();
  activateNextSlide();
});

prev.addEventListener("click", () => {
  activatePrevDot();
  activatePrevSlide();
});

Array.from(closeButtons).forEach((button) => {
  button.addEventListener("click", closeModal);
});
