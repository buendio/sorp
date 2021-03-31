// http://ctrlq.org/code/19616-detect-touch-screen-javascript
window.isTouch = function(){return(('ontouchstart' in window)||(navigator.maxTouchPoints>0)||(navigator.msMaxTouchPoints>0));}

if(window.isTouch())
    document.documentElement.classList.add("touch");