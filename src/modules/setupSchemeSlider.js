// Scheme слайдер
import { RiverSlider } from "./RiverSlider";

const schemeSlider = new RiverSlider({
  main: '.scheme-slider',
  wrap: '.scheme-slider__wrap',
  pagination: '#scheme-list',
  slidesPerView: 1,
  // loop: true,
  type: 'fade',
});
schemeSlider.init();

const schemeNavSlider = new RiverSlider({
  main: '.scheme-nav',
  wrap: '#scheme-list',
  type: 'slide',
  //   // loop: true,
  state: 'off',
  prev: '#nav-arrow-scheme_left',
  next: '#nav-arrow-scheme_right',
  disabledArrowClass: 'hide',
  responsive: [
    {
      breakpoint: 1134,
      state: 'on',
      slidesPerView: 5
    },
    {
      breakpoint: 1024,
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
schemeNavSlider.init();
