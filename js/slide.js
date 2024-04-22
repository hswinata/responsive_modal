export const slides = document.querySelectorAll(".modal__slide");
const modal = document.querySelector(".modal");
let slideWidth = slides[0].getBoundingClientRect().width;

//Update slideWidth and remove transition when resizing.
window.addEventListener("resize", () => {
  let resizedWidth = slides[0].getBoundingClientRect().width;
  if (slideWidth !== resizedWidth) {
    modal.setAttribute("no-transition", "");
    slideWidth = resizedWidth;
    modal.style.transform = `translateX(${
      -slideWidth * getCurrentSlideIndex()
    }px)`;
  }
});

//Add transition again after finished resizing.
window.addEventListener("touchend", () => {
  modal.removeAttribute("no-transition");
});

window.addEventListener("mouseup", () => {
  modal.removeAttribute("no-transition");
});

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
