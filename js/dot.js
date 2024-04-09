const dots = document.querySelectorAll(".modal__navigation-dot");

function deactivateDot() {
  const activeDot = document.querySelector(
    ".modal__navigation-dot[data-active]"
  );
  if (activeDot) {
    activeDot.removeAttribute("data-active");
  }
}

function activateDotByIndex(index) {
  deactivateDot();
  const newIndex = (index + dots.length) % dots.length;
  dots[newIndex].setAttribute("data-active", "");
}

export function activateNextDot() {
  const activeIndex = Array.from(dots).findIndex((dot) =>
    dot.hasAttribute("data-active")
  );
  deactivateDot();
  activateDotByIndex(activeIndex + 1);
}

export function activatePrevDot() {
  const activeIndex = Array.from(dots).findIndex((dot) => {
    dot.hasAttribute("data-active");
  });
  activateDotByIndex(activeIndex - 1);
}
