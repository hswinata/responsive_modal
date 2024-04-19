export const slides = document.querySelectorAll(".modal__slide");
const modal = document.querySelector(".modal");
const slideWidth = slides[0].getBoundingClientRect().width;

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

  modal.style.transform = `translateX(${-slideWidth * index}px)`;
}

export function activateNextSlide() {
  const activeSlideIndex = Array.from(slides).findIndex((slide) => {
    return slide.hasAttribute("data-active");
  });
  const nextSlideIndex = activeSlideIndex + 1;

  activateSlideByIndex(nextSlideIndex);
}

export function activatePrevSlide() {
  const activeSlideIndex = Array.from(slides).findIndex((slide) => {
    return slide.hasAttribute("data-active");
  });
  const prevSlideIndex = activeSlideIndex - 1;

  activateSlideByIndex(prevSlideIndex);
}
