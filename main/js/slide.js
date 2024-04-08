const slides = document.querySelectorAll(".modal__slide");

function deactivateSlide() {
  const activeSlide = document.querySelector(".modal__slide[data-active]");
  if (activeSlide) {
    activeSlide.removeAttribute("data-active");
  }
}

function activateSlideByIndex(index) {
  deactivateSlide();
  const newIndex = (index + slides.length) % slides.length;
  slides[newIndex].setAttribute("data-active", "");
}

export function activateNextSlide() {
  const activeIndex = Array.from(slides).findIndex((slide) =>
    slide.hasAttribute("data-active")
  );
  activateSlideByIndex(activeIndex + 1);
}

export function activatePrevSlide() {
  const activeIndex = Array.from(slides).findIndex((slide) =>
    slide.hasAttribute("data-active")
  );
  activateSlideByIndex(activeIndex - 1);
}
