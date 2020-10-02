import { addStyle } from "./styles";
import { RiverSlider } from "./RiverSlider";

addStyle('js-tooltip', `
.formula-item-popup.rotate, .problems-item-popup.rotate{
padding-top: 35px;
top: 155px;}
.formula-item-popup.rotate:before, .problems-item-popup.rotate:before{
transform: rotate(180deg);
}

.formula-item.active-item{
z-index: 1;
}
.formula-slider.river-slider{
align-items: normal;
}
.problems-slider.river-slider{
align-items: flex-start;
}
.problems-slider__wrap.river__wrap{
height: auto;
}
`);

// Настройка открытия/закрытия тултипов в блоках Формула и Проблемы
const formulaItems = document.querySelectorAll('.formula-item, .problems-item');
formulaItems.forEach(item => {
  item.addEventListener('mouseenter', event => {
    const currentTarget = event.currentTarget;
    if (currentTarget) {
      currentTarget.classList.add('active-item');
      const currentToolTip = currentTarget.querySelector('.formula-item-popup,.problems-item-popup');
      if (currentToolTip.getBoundingClientRect().top < 0) {
        currentToolTip.classList.add('rotate');
      }
    }
  });
  item.addEventListener('mouseleave', event => {
    const currentTarget = event.currentTarget;
    if (currentTarget) {
      currentTarget.classList.remove('active-item');
      const currentToolTip = currentTarget.querySelector('.formula-item-popup, .problems-item-popup');
      currentToolTip.classList.remove('rotate');
    }
  });
});

// Formula слайдер
const formulaSlider = new RiverSlider({
  main: '.formula-slider',
  wrap: '.formula-slider__wrap',
  prev: '#formula-arrow_left',
  next: '#formula-arrow_right',
  disabledArrowClass: 'hide',
  // loop: true,
  type: 'slide',
  activeSlideClass: 'active-item'
});
formulaSlider.init();

// Problems слайдер
const problemsSlider = new RiverSlider({
  main: '.problems-slider',
  wrap: '.problems-slider__wrap',
  prev: '#problems-arrow_left',
  next: '#problems-arrow_right',
  disabledArrowClass: 'hide',
  // loop: true,
  type: 'slide',
  activeSlideClass: 'active-item'
});
problemsSlider.init();
