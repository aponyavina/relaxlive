// Аккордион
export const setupAccordion = () => {
  const accordion = document.getElementById('js-accordion');
  const activeClass = 'msg-active';
  accordion.addEventListener('click', event => {
    const target = event.target;
    if (target.dataset.open === 'accordion') {
      const activeItem = accordion.querySelector(`.${activeClass}`);
      if (activeItem && activeItem !== target) { activeItem.classList.toggle(activeClass); }
      target.classList.toggle('msg-active');
    }
  });
};
