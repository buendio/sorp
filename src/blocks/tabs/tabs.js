const tabsParent = [...document.querySelectorAll(".tabs")],
  tabsHead = document.querySelectorAll(".tabs__head"),
  addStyle = element => element.classList.add("tab_active"),
  removeStyles = element => element.classList.remove("tab_active");

tabsParent.forEach((el, index) => {
  el.addEventListener('click', e => {
    let currentTabHead = [...tabsHead[index].children];
    let currentTabContent = [...[...el.children][1].children];

    currentTabHead.forEach((tab, idx)=> { 
      if (e.target == currentTabHead[idx]) {
        currentTabHead.forEach(tabToBeRemoved => removeStyles(tabToBeRemoved));
        currentTabContent.forEach(tabContent => removeStyles(tabContent));
        addStyle(tab);
        addStyle(currentTabContent[idx]);
      }
    });
  });
});