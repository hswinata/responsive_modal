export const slides = document.querySelectorAll(".modal__slide");

function deactivateSlide() {
  const activeSlide = document.querySelector(".modal__slide[data-active]");
  if (activeSlide) {
    activeSlide.removeAttribute("data-active");
  }
}

export function activateSlideByIndex(index) {
  deactivateSlide();
  const newSlideIndex = (index + slides.length) % slides.length;
  slides[newSlideIndex].setAttribute("data-active", "");
}

export function activateNextSlide() {
  const activeSlideIndex = Array.from(slides).findIndex((slide) => {
    return slide.hasAttribute("data-active");
  });
  activateSlideByIndex(activeSlideIndex + 1);
}

export function activatePrevSlide() {
  const activeSlideIndex = Array.from(slides).findIndex((slide) => {
    return slide.hasAttribute("data-active");
  });
  activateSlideByIndex(activeSlideIndex - 1);
}
