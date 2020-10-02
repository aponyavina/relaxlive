import { ControlTabs } from "./ControlTabs";

// Табы Портфолио
new ControlTabs({
  tabsContainerSelector: '.portfolio-slider__wrap',
  tabSelector: '.portfolio-slider__slide-frame',
  tabContents: [
    {
      tabContentSelector: '.popup-portfolio-text',
      activeContentClass: 'visible-content-block'
    }]
});

// Табы Портфолио Мобильная
new ControlTabs({
  tabsContainerSelector: '.portfolio-slider-mobile__wrap',
  tabSelector: '.portfolio-slider__slide-frame',
  tabContents: [
    {
      tabContentSelector: '.popup-portfolio-text',
      activeContentClass: 'visible-content-block'
    }]
});

// Табы Дизайн
new ControlTabs({
  tabsContainerSelector: '#designs-list',
  tabSelector: '.designs-nav__item',
  tabContents: [
    {
      tabContentSelector: '.preview-block',
      activeContentClass: 'visible'
    }]
});

// Табы Дизайн Модальное
new ControlTabs({
  tabsContainerSelector: '#nav-list-popup-designs',
  tabSelector: '.designs-nav__item_popup',
  tabContents: [
    {
      tabContentSelector: '.popup-design-text',
      activeContentClass: 'visible-content-block'
    }]
});

// Табы Работа
new ControlTabs({
  tabsContainerSelector: '#scheme-list',
  tabSelector: '.scheme-nav__item',
  tabContents: [
    {
      tabContentSelector: '.scheme-description-block',
      activeContentClass: 'visible-content-block'
    }]
});
