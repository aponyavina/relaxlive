// Designs слайдер
import { RiverSlider } from "./RiverSlider";

const designsStyle1Slider = new RiverSlider({
  main: '.designs-slider__style1',
  wrap: '.designs-slider__style1__wrap',
  prev: '#design_left',
  next: '#design_right',
  disabledArrowClass: 'hide',
  pagination: '#preview-block1',
  current: '#designs-counter .slider-counter-content__current',
  total: '#designs-counter .slider-counter-content__total',
  slidesPerView: 1,
  // loop: true,
  type: 'slide',
  activePaginationClass: 'preview_active'
});
designsStyle1Slider.init();

const designsStyle2Slider = new RiverSlider({
  main: '.designs-slider__style2',
  wrap: '.designs-slider__style2__wrap',
  prev: '#design_left',
  next: '#design_right',
  disabledArrowClass: 'hide',
  pagination: '#preview-block2',
  current: '#designs-counter .slider-counter-content__current',
  total: '#designs-counter .slider-counter-content__total',
  slidesPerView: 1,
  // loop: true,
  type: 'slide',
  activePaginationClass: 'preview_active'
});
designsStyle2Slider.init();

const designsStyle3Slider = new RiverSlider({
  main: '.designs-slider__style3',
  wrap: '.designs-slider__style3__wrap',
  prev: '#design_left',
  next: '#design_right',
  disabledArrowClass: 'hide',
  pagination: '#preview-block3',
  current: '#designs-counter .slider-counter-content__current',
  total: '#designs-counter .slider-counter-content__total',
  slidesPerView: 1,
  // loop: true,
  type: 'slide',
  activePaginationClass: 'preview_active'
});
designsStyle3Slider.init();

const designsStyle4Slider = new RiverSlider({
  main: '.designs-slider__style4',
  wrap: '.designs-slider__style4__wrap',
  prev: '#design_left',
  next: '#design_right',
  disabledArrowClass: 'hide',
  pagination: '#preview-block4',
  current: '#designs-counter .slider-counter-content__current',
  total: '#designs-counter .slider-counter-content__total',
  slidesPerView: 1,
  // loop: true,
  type: 'slide',
  activePaginationClass: 'preview_active'
});
designsStyle4Slider.init();

const designsStyle5Slider = new RiverSlider({
  main: '.designs-slider__style5',
  wrap: '.designs-slider__style5__wrap',
  prev: '#design_left',
  next: '#design_right',
  disabledArrowClass: 'hide',
  pagination: '#preview-block5',
  current: '#designs-counter .slider-counter-content__current',
  total: '#designs-counter .slider-counter-content__total',
  slidesPerView: 1,
  // loop: true,
  type: 'slide',
  activePaginationClass: 'preview_active'
});
designsStyle5Slider.init();

const designsSlider = new RiverSlider({
  main: '.designs-slider',
  wrap: '.designs-slider__wrap',
  pagination: '#designs-list',
  slidesPerView: 1,
  // loop: true,
  type: 'fade',
});
designsSlider.init();

const designsNavSlider = new RiverSlider({
  main: '.nav-designs',
  wrap: '#designs-list',
  type: 'slide',
  //   // loop: true,
  state: 'off',
  prev: '#nav-arrow-designs_left',
  next: '#nav-arrow-designs_right',
  disabledArrowClass: 'hide',
  responsive: [
    {
      breakpoint: 1134,
      state: 'on',
      slidesPerView: 4
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
designsNavSlider.init();


// Popup Designs слайдер
const popupDesignsStyle1Slider = new RiverSlider({
  main: '.popup-designs-slider__style1',
  wrap: '.popup-designs-slider__style1__wrap',
  prev: '#popup_design_left',
  next: '#popup_design_right',
  disabledArrowClass: 'hide',
  current: '#popup-designs-counter .slider-counter-content__current',
  total: '#popup-designs-counter .slider-counter-content__total',
  slidesPerView: 1,
  // loop: true,
  type: 'slide',
});
popupDesignsStyle1Slider.init();

const popupDesignsStyle2Slider = new RiverSlider({
  main: '.popup-designs-slider__style2',
  wrap: '.popup-designs-slider__style2__wrap',
  prev: '#popup_design_left',
  next: '#popup_design_right',
  disabledArrowClass: 'hide',
  current: '#popup-designs-counter .slider-counter-content__current',
  total: '#popup-designs-counter .slider-counter-content__total',
  slidesPerView: 1,
  // loop: true,
  type: 'slide',
});
popupDesignsStyle2Slider.init();

const popupDesignsStyle3Slider = new RiverSlider({
  main: '.popup-designs-slider__style3',
  wrap: '.popup-designs-slider__style3__wrap',
  prev: '#popup_design_left',
  next: '#popup_design_right',
  disabledArrowClass: 'hide',
  current: '#popup-designs-counter .slider-counter-content__current',
  total: '#popup-designs-counter .slider-counter-content__total',
  slidesPerView: 1,
  // loop: true,
  type: 'slide',
});
popupDesignsStyle3Slider.init();

const popupDesignsStyle4Slider = new RiverSlider({
  main: '.popup-designs-slider__style4',
  wrap: '.popup-designs-slider__style4__wrap',
  prev: '#popup_design_left',
  next: '#popup_design_right',
  disabledArrowClass: 'hide',
  current: '#popup-designs-counter .slider-counter-content__current',
  total: '#popup-designs-counter .slider-counter-content__total',
  slidesPerView: 1,
  // loop: true,
  type: 'slide',
});
popupDesignsStyle4Slider.init();

const popupDesignsStyle5Slider = new RiverSlider({
  main: '.popup-designs-slider__style5',
  wrap: '.popup-designs-slider__style5__wrap',
  prev: '#popup_design_left',
  next: '#popup_design_right',
  disabledArrowClass: 'hide',
  current: '#popup-designs-counter .slider-counter-content__current',
  total: '#popup-designs-counter .slider-counter-content__total',
  slidesPerView: 1,
  // loop: true,
  type: 'slide',
  activePaginationClass: 'preview_active'
});
popupDesignsStyle5Slider.init();

const popupDesignsSlider = new RiverSlider({
  main: '.popup-design-slider',
  wrap: '.popup-design-slider__wrap',
  pagination: '#nav-list-popup-designs',
  slidesPerView: 1,
  // loop: true,
  type: 'fade',
});
popupDesignsSlider.init();

const popupDesignsNavSlider = new RiverSlider({
  main: '.nav-designs.nav-popup',
  wrap: '#nav-list-popup-designs',
  type: 'slide',
  //   // loop: true,
  state: 'off',
  prev: '#nav-arrow-popup-designs_left',
  next: '#nav-arrow-popup-designs_right',
  disabledArrowClass: 'hide',
  responsive: [
    {
      breakpoint: 1134,
      state: 'on',
      slidesPerView: 4
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
popupDesignsNavSlider.init();
