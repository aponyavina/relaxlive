// main - блок слайдера, wrap - бертка слайдов
// prev, next - кнопки назад и вперел,
// current, total - элементы счетчика
// pagination - блок пагинации
//  activeSlideClass - дополнительный класс для активного слайда
//  activePaginationClass - класс активного элемента пагинации
//  disabledArrowClass - класс для отключения стрелок
//  type - тип переключения: 'fade' - один слайд в блоке (по умолчанию), появление с прозрачностью, slide - сдвиг слайда
//  slidesPerView - количество видимых слайдов (по умолчанию 1)
//  state: 'on', 'off' - начальное состояние
//  responsive - настройки адаптивности, принимает массив объектов:
//      breakpoint - точка применения настроек для равной или меньшей ширины
//      state: 'on', 'off' - состояние, если не передано, берется состояние предыдущей точки
//      slidesPerView - количество видимых слайдов, если не указано, берется предыдущее
//      type - тип переключения, если не указан, берется предыдущий
//  position = 0 - начальный слайд (отчет с ноля)
//  loop = зацикленность слайдера (не полная реализация)

export class RiverSlider {
  constructor({
    main,
    wrap,
    prev,
    next,
    current,
    total,
    pagination,
    activeSlideClass,
    activePaginationClass,
    disabledArrowClass,
    type = 'fade',
    loop = false,
    position = 0,
    slidesPerView = 1,
    responsive = [],
    state = 'on',
  }) {
    if (!main || !wrap) {
      console.warn('river-slider: Необходимо 2 свойства, "main"  и "wrap" !');
    }
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = [...this.wrap.children];
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.counter = { current: document.querySelector(current), total: document.querySelector(total) };
    this.pagination =  document.querySelector(pagination);
    this.type = type;
    this.slidesPerView = slidesPerView;
    this.state = state;
    this.configInd = 0;

    // Начальный объект конфигурации
    this.currentConfig = {
      breakpoint: Infinity,
      state,
      type,
      slidesPerView,
      slideWidth: (100 / slidesPerView).toFixed(2),
      maxPosition: this.slides.length - slidesPerView };

    // Начальный объект настроек
    this.options = {
      activeSlideClass,
      activePaginationClass,
      disabledArrowClass,
      position,
      loop
    };

    // Все конфигурации для адаптивного слайдера
    this.configs = [...responsive,  this.currentConfig
    ].sort((a, b) => b.breakpoint - a.breakpoint);
    this.configs.forEach((item, i, arr) => {
      if (i !== 0) {
        item.type = item.type || arr[i - 1].type;
        item.state = item.state || arr[i - 1].state;
        item.slidesPerView = item.slidesPerView || arr[i - 1].slidesPerView;
        item.slideWidth = (100 / item.slidesPerView).toFixed(2);
        item.maxPosition =  this.slides.length - item.slidesPerView;
      }
    });
  }

  init() {
    this.setClasses();
    this.addSliderStyles();
    this.initSliderControls();

    if (this.configs.length > 1) {
      this.initResponse();
    }

    if (this.currentConfig.state === 'on') {
      this.on();
    }
    this.addObserver();
  }

  // Отслеживает состояние главного контейнера слайдера, если неактивный, элементы управления на него не действуют.
  addObserver() {
    const config = {
      attributes: true
    };
    const observer = new MutationObserver(this.updateControls.bind(this));
    observer.observe(this.main, config);
  }

  // Классы для текущего слайдера
  setClasses() {
    this.mainClasses = [`river-slider`, `river-slider--${this.type}`];
    this.wrapClass = `river__wrap`;
    this.slideClasses = [`river__item`, `river__item--${this.type}`];
    this.activeClass = 'rs-active';
  }

  // Добавление стилей для слайдера
  addSliderStyles() {
    let style = document.getElementById(`river-style`);
    if (!style) {
      style = document.createElement('style');
      style.id = `river-style`;
    }

    style.textContent = `
     .river-slider{
          display: flex;
          align-items: center;
}

      .river-slider--slide{
      overflow: hidden;
      }
      
      .river__wrap{
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      flex-wrap: nowrap;
      transition: transform 0.5s ;
      will-change: transform ;
      }
      
      .river__item{
      transition: opacity 1s;
      display: flex;
      justify-content: center ;
      align-items: center  ;
      height: 100% ;
      margin: auto 0 ;
      max-width: 100%
      }
      
      .river__item--fade{
      width: 100%; 
      position: absolute;
      top: 0;
      left: 0;
      visibility: hidden;
      opacity: 0;
      }    
      
      .river__item--fade.${this.activeClass}{ 
      visibility: visible;
      opacity: 1;
     }
`;
    document.head.append(style);
  }

  // Настройка управляющих элементов
  initSliderControls() {
    // При наличии селектора контейнера конпагинации и дочерних элементов в этом контейнере,
    // устанавливаем дочерним пагинационный индексы
    if (this.pagination) {
      this.paginationItems =  [...this.pagination.children];
      if (this.paginationItems.length) {
        this.paginationItems.forEach((item, ind) => item.dataset.pagIndex = ind);
        // Слушатель на клик, запускает смену слайда на соответствующий индексу
        this.pagination.addEventListener('click', event => {
          const pagItem = event.target.closest('[data-pag-index]');
          if (pagItem) {
            this.changeState(+pagItem.dataset.pagIndex);
          }
        });
      }
    }

    // При наличии обоих элементов кнопок, устанавливаем слушатели на них.
    if (!this.prev || !this.next) { return; }
    this.prev.addEventListener('click', this.prevSlide.bind(this));
    this.next.addEventListener('click', this.nextSlide.bind(this));
  }

  // Включает слайдер (добавляет классы, меняет состоянии в соответствии позиции)
  on() {
    this.main.classList.add(...this.mainClasses);
    this.main.classList.add(this.activeClass);
    this.wrap.classList.add(this.wrapClass);
    this.slides.forEach(slide => {
      slide.classList.add(...this.slideClasses);
      slide.classList.remove(this.activeClass);
      slide.style.flex = `0 0 ${this.currentConfig.slideWidth}%`;
    });
    this.changeState(this.options.position);
  }

  // Выключает слайдер (снимает с блоков все классы слайдера, управление неактивно)
  off() {
    this.wrap.style.transform = '';
    this.main.classList.remove(...this.mainClasses);
    this.main.classList.remove(this.activeClass);
    this.wrap.classList.remove(this.wrapClass);
    this.slides.forEach(slide => {
      slide.classList.remove(...this.slideClasses);
      slide.style.flex = '';
    });
  }

  // Обновляет состояние в соответствии текущей конфигурации
  updateState() {
    this.off();
    if (this.currentConfig.state === 'on') {
      this.setClasses();
      this.on();
    }
  }

  // Изменяет состояние кнопок
  changeArrows() {
    if (this.prev && this.next && !this.options.loop && this.options.disabledArrowClass) {
      if (this.options.position === this.currentConfig.maxPosition) {
        this.next.classList.add(this.options.disabledArrowClass);
      } else {
        this.next.classList.remove(this.options.disabledArrowClass);
      }

      if (this.options.position === 0) {
        this.prev.classList.add(this.options.disabledArrowClass);
      } else {
        this.prev.classList.remove(this.options.disabledArrowClass);
      }
    }
  }

  // Изменяет состояние пагинации
  changePagination()  {
    if (this.pagination && this.paginationItems.length) {
      this.paginationItems.forEach((item, i) => {
        if (i === this.options.position) {
          item.classList.add(this.activeClass);
          if (this.options.activePaginationClass)item.classList.add(this.options.activePaginationClass);
        } else {
          item.classList.remove(this.activeClass);
          if (this.options.activePaginationClass)item.classList.remove(this.options.activePaginationClass);
        }
      });
    }
  }

  // Изменяет состояние счетчика
  changeCounter() {
    if (this.counter.current) {
      this.counter.current.textContent = this.options.position + 1;
    }
    if (this.counter.total) {
      this.counter.total.textContent = this.slides.length;
    }
  }

  // Изменяет слайд
  changeSlide(position) {
    this.slides[this.options.position].classList.remove(`${this.activeClass}`);
    this.slides[position].classList.add(`${this.activeClass}`);
    if (this.type === 'slide') {
      this.wrap.style.transform = `translateX(-${position * this.currentConfig.slideWidth}%)`;
    }
    this.options.position = position;
  }

  // Обновляет управляющие элементы
  updateControls() {
    // Если слайдер активен
    if (!this.main.classList.contains(this.activeClass)) return;
    this.changeArrows();
    this.changePagination();
    this.changeCounter();
  }

  // Изменяет состояние слайдера
  changeState(targetPosition) {
    // Если слайдер активен
    if (!this.main.classList.contains(this.activeClass)) return;

    if (!Number.isInteger(targetPosition)) { targetPosition = this.options.position; }
    if (targetPosition < 0) {
      if (this.options.loop) {
        targetPosition = this.currentConfig.maxPosition;
      } else { targetPosition = 0; }
    }

    if (targetPosition > this.currentConfig.maxPosition) {
      if (this.options.loop) {
        targetPosition = 0;
      } else targetPosition = this.currentConfig.maxPosition;
    }
    this.changeSlide(targetPosition);
    this.updateControls();
  }

  // Получает позицию предыдущего слайда, запускает изменение слайда
  prevSlide() {
    this.changeState(this.options.position - 1);
  }

  // Получает позицию следующего слайда, запускает изменение слайда
  nextSlide() {
    this.changeState(this.options.position + 1);
  }

  // Настройка адаптивности
  initResponse() {
    const checkBreakpoint = () => {
      const prevConfigInd = this.configInd;
      const windowWidth = document.documentElement.clientWidth;
      while (this.configs[this.configInd + 1] && windowWidth <=  this.configs[this.configInd + 1].breakpoint) {
        this.configInd++;
      }
      while (this.configs[this.configInd - 1] && windowWidth >  this.configs[this.configInd].breakpoint) {
        this.configInd--;
      }
      if (prevConfigInd !== this.configInd) {
        this.currentConfig = this.configs[this.configInd];
        this.updateState();
      }
    };
    window.addEventListener('resize', checkBreakpoint);
    checkBreakpoint();
  }
}
