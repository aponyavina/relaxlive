// Portfolio слайдер
import { RiverSlider } from "./RiverSlider";

const portfolioSlider = new RiverSlider({
  main: '.portfolio-slider',
  wrap: '.portfolio-slider__wrap',
  prev: '#portfolio-arrow_left',
  next: '#portfolio-arrow_right',
  disabledArrowClass: 'hide',
  slidesPerView: 3,
  // loop: true,
  type: 'slide',
  responsive: [
    {
      breakpoint: 1024,
      slidesPerView: 2
    },
    {
      breakpoint: 900,
      slidesPerView: 1
    },
    {
      breakpoint: 575,
      state: 'off'
    },
  ]
});
portfolioSlider.init();

const mobilePortfolioSlider = new RiverSlider({
  main: '.portfolio-slider-mobile',
  wrap: '.portfolio-slider-mobile__wrap',
  prev: '#portfolio-arrow-mobile_left',
  next: '#portfolio-arrow-mobile_right',
  current: '#portfolio-counter .slider-counter-content__current',
  total: '#portfolio-counter .slider-counter-content__total',
  disabledArrowClass: 'hide',
  state: 'off',
  // loop: true,
  type: 'slide',
  responsive: [
    {
      breakpoint: 575,
      state: 'on'
    },
  ]
});
mobilePortfolioSlider.init();

export const popupPortfolioSlider = new RiverSlider({
  main: '.popup-portfolio-slider',
  wrap: '.popup-portfolio-slider__wrap',
  prev: '#popup_portfolio_left',
  next: '#popup_portfolio_right',
  current: '#popup-portfolio-counter .slider-counter-content__current',
  total: '#popup-portfolio-counter .slider-counter-content__total',
  disabledArrowClass: 'hide',
  // loop: true,
  type: 'slide',
});
popupPortfolioSlider.init();
