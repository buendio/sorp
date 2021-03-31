const bgNodes = document.querySelectorAll(".bg_remove-sm-min"),
  disablerStyle = "bg_right-side-remove",
  addStyle = () => bgNodes.forEach(el => el.classList.add(disablerStyle));

//- 1. проверяет после загрузки   ||||   2. удаляет/добавляет на изменении разрешения экрана
window.innerWidth <= 768 ? addStyle() : null;
window.addEventListener("resize", () => window.innerWidth <= 768 ? addStyle() : bgNodes.forEach(el => el.classList.remove(disablerStyle)));