// Отправка формы AJAX
// Важно: в loadMessageOrInnerHTML можно передать текст или html прелоадера
// successMessageOrPopUp - сообщение или элемент модального окна
// messageRelativeElement - элемент по отношению к которому делается вставка сообщения
// messagePosition - позиция вставки: beforebegin" | "afterbegin" | "beforeend" | "afterend

import { PopUp } from "./PopUp";

export const sendForm = (form, errorClass = 'error', {
  messageRelativeElement,
  messagePosition = 'beforeend',
  successMessageOrPopUp = 'Спасибо! Мы скоро с вами свяжемся!',
  loadMessageOrInnerHTML = 'Загрузка ...',
  errorMessage = 'Что-то пошло не так ...'
} = {}) => {

  const statusMessage = document.createElement('div');
  statusMessage.className = 'form-status-message';
  if (messageRelativeElement) {
    messageRelativeElement.insertAdjacentElement(messagePosition, statusMessage);
  }

  // Получение данных из формы
  const getFormData = () => {
    const formData = new FormData(form);
    const body = {};
    formData.forEach((value, key) => body[key] = value.trim());
    return body;
  };

  // Отправка данных
  const sendData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(body)
  });

  // Показ ошибки чекбокса
  const toggleError = event => {
    event.target.classList.toggle(errorClass);
  };
  // Проверка чекбокса
  const isChecked = checkbox => {
    if (!checkbox.checked) {
      checkbox.classList.add(errorClass);
      checkbox.addEventListener('change', toggleError);
      return false;
    } else {
      checkbox.removeEventListener('change', toggleError);
      return true;
    }

  };

  // Вывод успешной отправки и ошибки
  const outputSuccess = () => {
    if (successMessageOrPopUp instanceof PopUp) {
      successMessageOrPopUp.openPopUp();
      statusMessage.textContent = '';
    } else {
      statusMessage.textContent = successMessageOrPopUp;
    }
  };
  const outputError = error => {
    statusMessage.textContent = errorMessage;
    console.error(error);
  };

  // Слушатель отправки
  form.addEventListener('submit', event => {
    event.preventDefault();
    const checkbox = form.querySelector('[type="checkbox"]');
    if (!isChecked(checkbox)) return;

    statusMessage.innerHTML = loadMessageOrInnerHTML;

    sendData(getFormData(event.target))
      .then(response => {
        setTimeout(() => {
          statusMessage.textContent = '';
        }, 5000);
        if (response.status !== 200) {
          throw new Error('Network status not 200.');
        }
        outputSuccess();
      })
      .catch(outputError);
    form.reset();
  });
};
