export const dots = document.querySelectorAll(".modal__carousel-dot");

function deactivateDot() {
  const activeDot = document.querySelector(".modal__carousel-dot[data-active]");
  if (activeDot) {
    activeDot.removeAttribute("data-active");
  }
}

export function activateDotByIndex(index) {
  deactivateDot();
  const newDotIndex = (index + dots.length) % dots.length;
  dots[newDotIndex].setAttribute("data-active", "");
}

export function activateNextDot() {
  const activeDotIndex = Array.from(dots).findIndex((dot) => {
    return dot.hasAttribute("data-active");
  });
  activateDotByIndex(activeDotIndex + 1);
}

export function activatePrevDot() {
  const activeDotIndex = Array.from(dots).findIndex((dot) => {
    return dot.hasAttribute("data-active");
  });
  activateDotByIndex(activeDotIndex - 1);
}
