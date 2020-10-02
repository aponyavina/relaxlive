// Repair слайдеры
import { RiverSlider } from "./RiverSlider";

const repair1Slider = new RiverSlider({
  main: '.types-repair1',
  wrap: '.repair1-slider__wrap',
  prev: '#repair-types-arrow_left',
  next: '#repair-types-arrow_right',
  type: 'slide',
  disabledArrowClass: 'hide',
  //   // loop: true,
  current: '#repair-counter .slider-counter-content__current',
  total: '#repair-counter .slider-counter-content__total',
});
repair1Slider.init();

const repair2Slider = new RiverSlider({
  main: '.types-repair2',
  wrap: '.repair2-slider__wrap',
  prev: '#repair-types-arrow_left',
  next: '#repair-types-arrow_right',
  disabledArrowClass: 'hide',
  type: 'slide',
  //   // loop: true,
  current: '#repair-counter .slider-counter-content__current',
  total: '#repair-counter .slider-counter-content__total',
});
repair2Slider.init();

const repair3Slider = new RiverSlider({
  main: '.types-repair3',
  wrap: '.repair3-slider__wrap',
  prev: '#repair-types-arrow_left',
  next: '#repair-types-arrow_right',
  disabledArrowClass: 'hide',
  type: 'slide',
  //   // loop: true,
  current: '#repair-counter .slider-counter-content__current',
  total: '#repair-counter .slider-counter-content__total',
});
repair3Slider.init();

const repair4Slider = new RiverSlider({
  main: '.types-repair4',
  wrap: '.repair4-slider__wrap',
  prev: '#repair-types-arrow_left',
  next: '#repair-types-arrow_right',
  disabledArrowClass: 'hide',
  type: 'slide',
  //   // loop: true,
  current: '#repair-counter .slider-counter-content__current',
  total: '#repair-counter .slider-counter-content__total',
});
repair4Slider.init();

const repair5Slider = new RiverSlider({
  main: '.types-repair5',
  wrap: '.repair5-slider__wrap',
  prev: '#repair-types-arrow_left',
  next: '#repair-types-arrow_right',
  disabledArrowClass: 'hide',
  type: 'slide',
  //   // loop: true,
  current: '#repair-counter .slider-counter-content__current',
  total: '#repair-counter .slider-counter-content__total',
});
repair5Slider.init();

const repairTypesNavSlider = new RiverSlider({
  main: '.repair-types-nav',
  wrap: '.nav-list-repair',
  type: 'slide',
  //   // loop: true,
  state: 'off',
  prev: '#nav-arrow-repair-left_base',
  next: '#nav-arrow-repair-right_base',
  disabledArrowClass: 'hide',
  responsive: [
    {
      breakpoint: 1024,
      state: 'on',
      slidesPerView: 3
    },
    {
      breakpoint: 768,
      slidesPerView: 2
    },
    {
      breakpoint: 575,
      slidesPerView: 1
    },
  ]
});
repairTypesNavSlider.init();

const repairTypeSlider = new RiverSlider({
  main: '.repair-types-slider',
  wrap: '.repair-types-slider__wrap',
  type: 'fade',
  //   // loop: true,
  pagination: '.nav-list-repair',
  activePaginationClass: 'active',
});
repairTypeSlider.init();
