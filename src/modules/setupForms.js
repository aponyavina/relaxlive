import { addStyle } from "./styles";
import { sendForm } from "./sendForm";

// Отправка форм
export const setupForms = popupThank => {
  addStyle('js-styles', `
  .checkbox__input.invalid ~ .checkbox__label {
    background-color: rgba(255, 0, 0, 0.5);
  }
  
  form {
  position: relative;
  }
  .form-status-message{
    color: #fba600;
    position: absolute;
    left: 0;
    bottom: 180px;
    text-align: center;
    width: 100%;
    font-size: 20px;
  }
  
  .preloader {
    width: 100%;
    margin: auto;
    padding: 5px;
    text-align: center;
  }
      
  .pl-child {
    width: 30px;
    height: 10px;
    background-color: #f17c0c;
    border-radius: 100%;
    display: inline-block;
    animation: preloader 1.4s ease-in-out 0s infinite both;
  }
  
  .pl-child-1 {
    animation-delay: -0.32s;
  }
    
  .pl-child-2 {
    animation-delay: -0.16s;
  }
  
  @keyframes preloader {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1.0);
    }
`);

  [...document.forms].forEach(form => {
    sendForm(form, 'invalid', {
      messageRelativeElement: form,
      messagePosition: 'beforeend',
      successMessageOrPopUp: popupThank,
      loadMessageOrInnerHTML: `
      <div class="preloader">
        <div class="pl-child-1 pl-child"></div>
        <div class="pl-child-2 pl-child"></div>
        <div class="pl-child-3 pl-child"></div>
      </div>
    `
    });
  });
};
