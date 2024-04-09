export function closeModal() {
  const activeSlide = document.querySelector(".modal[data-active]");
  activeSlide.removeAttribute("data-active");
}