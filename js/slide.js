export const slides = document.querySelectorAll(".modal__slide");
const modal = document.querySelector(".modal");
const slideWidth = slides[0].getBoundingClientRect().width;

export const getCurrentSlideIndex = () =>
  Array.from(slides).findIndex((slide) => slide.hasAttribute("data-active"));

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
  modal.style.transform = `translateX(${-slideWidth * newSlideIndex}px)`;
}

export function activateSlide(direction) {
  const currentSlideIndex = getCurrentSlideIndex();
  activateSlideByIndex(
    direction === "next" ? currentSlideIndex + 1 : currentSlideIndex - 1
  );
}
