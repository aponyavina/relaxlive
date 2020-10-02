// Плавная прокрутка к элементу
export const smoothScroll = elem => {
  if (elem.hash) {
    document.querySelector(elem.hash).scrollIntoView({ behavior: 'smooth' });
  }
};
