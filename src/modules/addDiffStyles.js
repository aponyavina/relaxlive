// Добавление особых стилей для разных элементов
import { addStyle } from "./styles";

addStyle('js-slider', `
    .popup-active{
      visibility: visible;
    }
    
    @media (max-width: 1134px) {
      .nav-list {
        min-width: auto;
      }
    
      .nav-list svg{
        width: 96% !important;
      }
      
      .designs-nav__item{
        min-width: auto !important;
      }
      
      .scheme-nav__item{
        min-width: auto !important;
      }
    }
    
    @media (max-width: 768px) {
      #reviews-arrow_right {
        right: -40px;
      }
      
      #reviews-arrow_left {
        left: -40px;
      }
    }
      
    @media (max-width: 575px) {
      #reviews-arrow_right {
        right:55px;
      }
      #reviews-arrow_left {
        left: 55px;
      }
    }
`);

addStyle('js-popup-repair', `
  .popup-repair-types-content-table-wrap{
    display: block !important;
  }
  .popup-repair-types-content-table{
    height: 416px  !important;
  }
  .popup-repair-types-content-table__list tbody{
    height: 100%  !important;
  }
  .nav-list-popup-repair{
    -webkit-transition: 0s;
    transition: 0s;
  }
  .popup-repair-types-nav__item {
    min-height: 36px !important;
    margin-top: 22px !important;
  }
  @media (max-width: 1024px) {
    .popup-repair-types-content-table__list {
      padding-left: 0;}
    }
  }
  @media (max-width: 575px) {
    .popup-repair-types-content-table-wrap{
      display: flex !important;
    }
  }
`);
