// Настройка динамической подгрузки данных Виды Ремонта
import { getData } from "./getData";
import { RiverSlider } from "./RiverSlider";

const popupRepair = document.querySelector('[data-popup="repair-types"]');

const observer = new MutationObserver(() => {
// Если попап открылся, добаляем прелоадер и запускаем загрузку данных
  if (popupRepair.classList.contains('popup-active')) {
    const popupRepair = document.querySelector('[data-popup="repair-types"]');
    const popupRepairButtonContainer = popupRepair.querySelector('.nav-list-popup-repair');
    const popupRepairContentContainer = popupRepair.querySelector('.popup-repair-types-content-table');

    const preloader = `
      <div class="preloader popup-repair">
        <div class="pl-child-1 pl-child"></div>
        <div class="pl-child-2 pl-child"></div>
        <div class="pl-child-3 pl-child"></div>
      </div>
    `;

    popupRepairButtonContainer.innerHTML = preloader;
    popupRepairContentContainer.innerHTML = preloader;
    // Запрашиваем данные
    getData('db/db.json').then(data => {
      // Если массив не пустой
      if (data.length) {
        popupRepairButtonContainer.textContent = '';
        popupRepairContentContainer.textContent = '';

        data.forEach(item => {
          // Генерируем кнопки переключения и таблицы с данными
          if (item.date) {
            const popupRepairDate = document.createElement('DIV');
            popupRepairDate.className = 'popup-repair-types-content__head-date';
            popupRepairDate.textContent = item.date;
          }

          if (item.title) {
            const repairButton = document.createElement('BUTTON');
            repairButton.className = 'button_o popup-repair-types-nav__item';
            repairButton.textContent = item.title;

            popupRepairButtonContainer.append(repairButton);
          }

          if (item.priceList) {
            const repairTable = document.createElement('TABLE');
            repairTable.className = 'popup-repair-types-content-table__list';

            item.priceList.forEach(priceListItem => {
              const colTitleText1 = 'Ед.измерения';
              const colTitleText2 = 'Цена за ед.';

              const row = repairTable.insertRow();
              row.className = 'mobile-row';

              const typesName = row.insertCell();
              typesName.className = 'repair-types-name';
              typesName.textContent = priceListItem.typeService;

              const colTitle1 = row.insertCell();
              colTitle1.className = 'mobile-col-title tablet-hide desktop-hide';
              colTitle1.textContent = colTitleText1;

              const colTitle2 = row.insertCell();
              colTitle2.className = 'mobile-col-title tablet-hide desktop-hide';
              colTitle2.textContent = colTitleText2;

              const typesUnits = row.insertCell();
              typesUnits.className = 'repair-types-value';
              typesUnits.innerHTML = `${priceListItem.units.replace(/(\d)/g, "<sup>$1</sup>")}`;

              const typesCost = row.insertCell();
              typesCost.className = 'repair-types-value';
              typesCost.textContent = priceListItem.cost;
            });
            popupRepairContentContainer.append(repairTable);
          }
        });
      } else { throw new Error('Пустой массив данных.'); }

      // Запускаем слайдер для управления переключением
      const popupRepairSlider = new RiverSlider(
        {
          main: '.popup-repair-types-content-table-wrap',
          wrap: '.popup-repair-types-content-table',
          type: 'fade',
          //   // loop: true,
          pagination: '.nav-list-popup-repair',
          activePaginationClass: 'active',
        }
      );

      popupRepairSlider.init();

      // Запускаем слайдер для табов при адаптиве
      const popupRepairNavSlider = new RiverSlider({
        main: '.nav-popup-repair-types',
        wrap: '.nav-list-popup-repair',
        type: 'slide',
        //   // loop: true,
        state: 'off',
        prev: '#nav-arrow-popup-repair_left',
        next: '#nav-arrow-popup-repair_right',
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
      popupRepairNavSlider.init();

      // Меняем заголовок при клике
      const repairTypeTitle = document.querySelector('#switch-inner');
      repairTypeTitle.textContent = popupRepairButtonContainer.children[0].textContent;
      popupRepairButtonContainer.addEventListener('click', event => {
        const targetPag = event.target.closest('[data-pag-index]');
        if (targetPag) {
          repairTypeTitle.textContent = targetPag.textContent;
        }
      });

      // Обзорщик, выключит слайдеры при закрытии модального окна
      const observerOff = new MutationObserver(() => {
        if (!popupRepair.classList.contains('popup-active')) {
          popupRepairSlider.off();
          popupRepairNavSlider.off();
          observerOff.disconnect();
        }
      });

      observerOff.observe(popupRepair, {
        attributes: true
      });
    }).catch(error => {
      popupRepairButtonContainer.innerHTML = '<p>Что-то пошло не так.</p><p>Пожалуйста, повторите позже.</p>';
      popupRepairContentContainer.innerHTML = '<p>Что-то пошло не так.</p><p>Пожалуйста, повторите позже.</p>';
      console.error(error);
    });
  }
});

observer.observe(popupRepair, {
  attributes: true
});
