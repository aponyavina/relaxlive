// Табы

export class ControlTabs {
  constructor({ tabsContainerSelector,
    tabSelector,
    activeTabClass = 'active',
    tabContents = [] }) {

    this.tabsContainer = document.querySelector(tabsContainerSelector);
    this.tabSelector = tabSelector;
    this.tabs = this.tabsContainer.querySelectorAll(tabSelector);
    this.activeTabClass = activeTabClass;
    this.tabContents = [];
    if (tabContents.length) {
      tabContents.forEach(item => {
        if (item.tabContentSelector)
          this.tabContents.push({
            activeContentClass: item.activeContentClass || 'active',
            disabledContentClass: item.disabledContentClass || 'd-none',
            tabContent: [...document.querySelectorAll(item.tabContentSelector)],
          });
      });
    }
    this.init();
  }

  init() {
    this.changeTabContent(this.tabs[0]);
    this.tabsContainer.addEventListener('click', event => {
      const currentTab = event.target.closest(this.tabSelector);
      if (currentTab) {
        this.changeTabContent(currentTab);
      }
    });
  }

  changeTabContent(currentTab)  {
    this.tabs.forEach((tab, i) => {
      if (tab === currentTab) {
        tab.classList.add(this.activeTabClass);
        this.tabContents.forEach(content => {
          content.tabContent[i].classList.add(content.activeContentClass);
          content.tabContent[i].classList.remove(content.disabledContentClass);
        });
      } else {
        tab.classList.remove(this.activeTabClass);
        this.tabContents.forEach(content => {
          content.tabContent[i].classList.remove(content.activeContentClass);
          content.tabContent[i].classList.add(content.disabledContentClass);
        });
      }
    });
  }
}
