export function closeModal() {
  const activeSlide = document.querySelector(".modal[data-active]");
  const carousel = document.querySelector(".modal__carousel[data-active]");
  console.log(carousel);
  activeSlide.removeAttribute("data-active");
  carousel.removeAttribute("data-active");
}
