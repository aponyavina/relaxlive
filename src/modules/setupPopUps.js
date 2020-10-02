// Инициализация моадльных окон
import { PopUp } from "./PopUp";

export const popupMenu = new PopUp({
  popUpSelector: '[data-popup="menu"]',
  closeButtonsSelector: '[data-close="menu"]',
  openButtonsSelector: '[data-open="menu"]',
  activeClass: 'showHide-menu',
});
const popupRepairTypes = new PopUp({
  popUpSelector: '[data-popup="repair-types"]',
  closeButtonsSelector: '[data-close="repair-types"]',
  openButtonsSelector: '[data-open="repair-types"]',
  activeClass: 'popup-active'
});
const popupPrivacy = new PopUp({
  popUpSelector: '[data-popup="privacy"]',
  openButtonsSelector: '[data-open="privacy"]',
  closeButtonsSelector: '[data-close="privacy"]',
  activeClass: 'popup-active'
});
const popupConsultation = new PopUp({
  popUpSelector: '[data-popup="consultation"]',
  openButtonsSelector: '[data-open="consultation"]',
  closeButtonsSelector: '[data-close="consultation"]',
  activeClass: 'popup-active'
});
const popupDesign = new PopUp({
  popUpSelector: '[data-popup="design"]',
  openButtonsSelector: '[data-open="design"]',
  closeButtonsSelector: '[data-close="design"]',
  activeClass: 'popup-active',
  disactiveClass: 'hide'
});
const popupTransparency = new PopUp({
  popUpSelector: '[data-popup="transparency"]',
  openButtonsSelector: '[data-open="transparency"]',
  closeButtonsSelector: '[data-close="transparency"]',
  activeClass: 'popup-active',
  disactiveClass: 'hide'
});
export const popupPortfolio = new PopUp({
  popUpSelector: '[data-popup="portfolio"]',
  closeButtonsSelector: '[data-close="portfolio"]',
  activeClass: 'popup-active',
  disactiveClass: 'hide'
});
export const popupThank = new PopUp({
  popUpSelector: '[data-popup="thank"]',
  closeButtonsSelector: '[data-close="thank"]',
  activeClass: 'popup-active'
});
