// Transparency слайдеры
import { RiverSlider } from "./RiverSlider";

const transparencySlider = new RiverSlider({
  main: '.transparency-slider',
  wrap: '.transparency-slider__wrap',
  prev: '#transparency-arrow_left',
  next: '#transparency-arrow_right',
  disabledArrowClass: 'hide',
  type: 'slide',
  state: 'off',
  // loop: true,
  responsive: [
    {
      breakpoint: 1090,
      state: 'on'
    },
  ]
});
transparencySlider.init();

export const popupTransparencySlider = new RiverSlider({
  main: '.popup-transparency-slider',
  wrap: '.popup-transparency-slider__wrap',
  prev: '#transparency_left',
  next: '#transparency_right',
  disabledArrowClass: 'hide',
  current: '#transparency-popup-counter .slider-counter-content__current',
  total: '#transparency-popup-counter .slider-counter-content__total',
  type: 'slide',
  // loop: true,
});
popupTransparencySlider.init();
