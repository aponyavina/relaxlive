import "./modules/polyfills";
import { viewSecondPhoneNumber } from "./modules/viewSecondPhoneNumber";
import { setupSmoothScroll } from "./modules/setupSmoothScroll";
import { setupForms } from "./modules/setupForms";
import { setupAccordion } from "./modules/setupAccordion";
import { maskPhone } from "./modules/maskPhone";
import { RiverSlider } from "./modules/RiverSlider";

import "./modules/setupPopUps"; // Настройка модальных
import "./modules/addDiffStyles"; // Добавление некоторых стилей
import "./modules/setupRepairSliders"; // Настройка слайдеров Виды ремонта
import "./modules/setupPortfolioSliders"; // Настройка слайдеров Портфолио
import "./modules/setupTransparencySliders"; // Настройка слайдеров Документы
import "./modules/setupDesignsSliders"; // Настройка слайдеров Дизайн
import "./modules/setupSchemeSlider"; // Настройка слайдеров Работа
import "./modules/setupControlTabs"; // Настройка Табов
import "./modules/setupDymanicData"; // Настройка динамических данных для модального Виды ремонта
import "./modules/setupToolTips"; // Настройка динамических данных для модального Виды ремонта

import { popupMenu, popupPortfolio, popupThank } from "./modules/setupPopUps";
import { popupTransparencySlider } from "./modules/setupTransparencySliders";
import { popupPortfolioSlider } from "./modules/setupPortfolioSliders";

// Показ второго телефона в шапке
viewSecondPhoneNumber();

// Настройка плавной прокрутки
setupSmoothScroll(popupMenu);

// Настройка отправки форм
setupForms(popupThank);

// Настройка аккордеона
setupAccordion();

// Установка маски для полей с телефоном
const phoneInputs = document.querySelectorAll('[name="phone"]');
phoneInputs.forEach(input => maskPhone(input));

// Reviews слайдер
const reviewsSlider = new RiverSlider({
  main: '.reviews-slider',
  wrap: '.reviews-slider__wrap',
  prev: '#reviews-arrow_left',
  next: '#reviews-arrow_right',
  disabledArrowClass: 'hide',
  // loop: true,
  type: 'slide',
});
reviewsSlider.init();

// Partners слайдер
const partnersSlider = new RiverSlider({
  main: '.partners-slider',
  wrap: '.partners-slider__wrap',
  prev: '#partners-arrow_left',
  next: '#partners-arrow_right',
  disabledArrowClass: 'hide',
  // loop: true,
  type: 'slide',
  slidesPerView: 3,
  responsive: [
    {
      breakpoint: 1024,
      slidesPerView: 2
    },
    {
      breakpoint: 575,
      slidesPerView: 1
    },
  ]
});
partnersSlider.init();


// Установка слушателя для изменения слайда документа в модальном
const transparencyDocs = document.querySelectorAll('[data-open="transparency"]');
transparencyDocs.forEach(doc => doc.addEventListener('click', event => {
  popupTransparencySlider.changeState(+event.currentTarget.dataset.slide);
}));

// Установка слушателя для открытия модального портфолио с соответствующим слайдом
const portfolioBlocks = document.querySelectorAll('.portfolio-slider-wrap');
portfolioBlocks.forEach(block => {
  block.addEventListener('click', event => {
    const portfolioItem = event.target.closest('[data-slide]');
    if (portfolioItem) {
      popupPortfolio.openPopUp();
      popupPortfolioSlider.changeState(+portfolioItem.dataset.slide);
    }
  });
});
