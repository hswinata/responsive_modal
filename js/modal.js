export function closeModal() {
  const activeContainer = document.querySelector(".outer[data-active]");
  const carousel = document.querySelector(".modal__carousel[data-active]");

  activeContainer.removeAttribute("data-active");
  carousel.removeAttribute("data-active");
}
