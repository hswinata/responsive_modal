const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const closeButtons = document.querySelectorAll(".modal__close");
const slides = document.querySelectorAll(".modal__slide");
const dots = document.querySelectorAll(".modal__navigation-dot");

//Close function
function closeModal() {
  const activeSlide = document.querySelector(".modal[data-active]");
  activeSlide.removeAttribute("data-active");
}

//Dot functions
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

function activateNextDot() {
  const activeIndex = Array.from(dots).findIndex((dot) =>
    dot.hasAttribute("data-active")
  );
  deactivateDot();
  activateDotByIndex(activeIndex + 1);
}

function activatePrevDot() {
  const activeIndex = Array.from(dots).findIndex((dot) => {
    dot.hasAttribute("data-active");
  });
  activateDotByIndex(activeIndex - 1);
}

//Slide functions
function deactivateSlide() {
  const activeSlide = document.querySelector(".modal__slide[data-active]");
  if (activeSlide) {
    activeSlide.removeAttribute("data-active");
  }
}

function activateSlideByIndex(index) {
  deactivateSlide();
  const newIndex = (index + slides.length) % dots.length;
  slides[newIndex].setAttribute("data-active", "");
}

function activateNextSlide() {
  const activeIndex = Array.from(slides).findIndex((slide) =>
    slide.hasAttribute("data-active")
  );
  activateSlideByIndex(activeIndex + 1);
}

function activatePrevSlide() {
  const activeIndex = Array.from(slides).findIndex((slide) =>
    slide.hasAttribute("data-active")
  );
  activateSlideByIndex(activeIndex - 1);
}

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
