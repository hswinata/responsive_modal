import { getCurrentSlideIndex } from "./slide.js";

export const dots = document.querySelectorAll(".modal__carousel-dot");

function deactivateDot() {
  const activeDot = document.querySelector(".modal__carousel-dot[data-active]");
  if (activeDot) {
    activeDot.removeAttribute("data-active");
  }
}

export function activateDot(index = getCurrentSlideIndex()) {
  deactivateDot();

  const newDotIndex = (index + dots.length) % dots.length;
  dots[newDotIndex].setAttribute("data-active", "");
}
