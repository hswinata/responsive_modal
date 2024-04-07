const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".modal__slide");
const dots = document.querySelectorAll(".modal__navigation-dot");

//Dot functions
function deactivateDot() {
  const activeDot = document.querySelector(
    ".modal__navigation-dot[data-active]"
  );
  if (activeDot) {
    activeDot.removeAttribute("data-active");
  }
}

function activateNextDot() {
  const activeIndex = Array.from(dots).findIndex((dot) =>
    dot.hasAttribute("data-active")
  );
  deactivateDot();
  const nextIndex = (activeIndex + 1) % dots.length;
  dots[nextIndex].setAttribute("data-active", "");
}

function activatePrevDot() {
  const activeIndex = Array.from(dots).findIndex((dot) => {
    dot.hasAttribute("data-active");
  });
  deactivateDot();
  const prevIndex = (activeIndex - 1 + dots.length) % dots.length;
  dots[prevIndex].setAttribute("data-active", "");
}

//Slide functions
function deactivateSlide() {
  const activeSlide = document.querySelector(".modal__slide[data-active]");
  if (activeSlide) {
    activeSlide.removeAttribute("data-active");
  }
}

function activateNextSlide() {
  const activeIndex = Array.from(slides).findIndex((slide) =>
    slide.hasAttribute("data-active")
  );
  deactivateSlide();
  const nextIndex = (activeIndex + 1) % slides.length;
  slides[nextIndex].setAttribute("data-active", "");
}

function activatePrevSlide() {
  const activeIndex = Array.from(slides).findIndex((slide) =>
    slide.hasAttribute("data-active")
  );
  deactivateSlide();
  const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
  slides[prevIndex].setAttribute("data-active", "");
}

next.addEventListener("click", () => {
  activateNextDot();
  activateNextSlide();
});
prev.addEventListener("click", () => {
  activatePrevDot();
});
