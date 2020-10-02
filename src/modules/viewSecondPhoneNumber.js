// Показ второго номер телефона в шапке

export const viewSecondPhoneNumber = () => {
  const phoneArrowButton = document.querySelector('#js-phone-arrow');
  const phoneNumberAccord = document.querySelector('#js-phone-number-accord');

  phoneArrowButton.addEventListener('click', () => {
    phoneArrowButton.classList.toggle('header-accord-arrow-active');
    phoneNumberAccord.classList.toggle('header-accord-active');
  });
};
