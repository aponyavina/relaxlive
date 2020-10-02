// Плавная прокрутка Вверх и пунктов Меню
import { smoothScroll } from "./smoothScroll";

export const setupSmoothScroll = popupMenu => {
  document.getElementById('toTop').addEventListener('click', event => {
    event.preventDefault();
    const target = event.currentTarget;
    smoothScroll(target.querySelector('a'));
  });

  popupMenu.popUp.addEventListener('click', event => {
    const target = event.target;
    if (target.matches('a')) {
      event.preventDefault();
      smoothScroll(target);
      popupMenu.closePopUp();
    }
  });
};
