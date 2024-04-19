export function closeModal() {
  const activeSlide = document.querySelector(".modal[data-active]");
  const carousel = document.querySelector(".modal__carousel[data-active]");

  activeSlide.removeAttribute("data-active");
  carousel.removeAttribute("data-active");
}
