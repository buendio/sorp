let $bgTriangle = $(".bg_triangle");

function addClassActive() {
  $bgTriangle.addClass("bg_triangle-active");
}

function loadScrollBg() {
  $bgTriangle.each(function(){
    if (isOnScreen($(this), 200)) {
      addClassActive();
      window.$window.off("scroll.loadScrollBg");
    }
  });
}

loadScrollBg();
window.$window.on("scroll.loadScrollBg", window.throttle(window.speed * 2, loadScrollBg));
window.$html.on("SORP_changeModal", addClassActive);