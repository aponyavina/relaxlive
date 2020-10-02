// PopUp
import { addStyle } from "./styles";

export class PopUp {
  constructor({ popUpSelector, openButtonsSelector, closeButtonsSelector, activeClass = 'active', activeCSS, disactiveClass }) {
    this.popUp = document.querySelector(popUpSelector);
    this.openButtons = document.querySelectorAll(openButtonsSelector);
    this.closeButtons = this.popUp.querySelectorAll(closeButtonsSelector);
    this.activeClass = activeClass;
    this.disactiveClass = disactiveClass;

    if (activeCSS) {
      addStyle('js-popup-styles', activeCSS);
    }
    this.init();
  }

  // Открытие модального окна
  openPopUp() {
    if (this.disactiveClass) {
      this.popUp.classList.remove(this.disactiveClass);
    }
    this.popUp.classList.add(this.activeClass);
  }

  // Закрытие модального окна
  closePopUp() {
    if (this.disactiveClass) {
      this.popUp.classList.add(this.disactiveClass);
    }
    this.popUp.classList.remove(this.activeClass);
  }

  // Слушатели на управляющие кнопки
  init() {
    if (this.disactiveClass) {
      this.popUp.classList.add(this.disactiveClass);
    }
    if (this.openButtons.length) {
      this.openButtons.forEach(button => {
        button.addEventListener('click', this.openPopUp.bind(this));
      });
    }
    if (this.closeButtons.length) {
      this.closeButtons.forEach(button => {
        button.addEventListener('click', this.closePopUp.bind(this));
      });
    }
  }
}
