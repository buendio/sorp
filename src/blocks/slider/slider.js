var slidetimer = 0;
var elem = '.slide';
var time = 3000;
var reverse = true;

function setslide(autochange = true) {
    let arr = $(elem);

    let increase = reverse ? -1 : 1;
    for (let i = 0; i < arr.length; i++) {
        if ($(arr[i]).hasClass('second')) {
            let second = (i + increase >= 0 && i + increase <= arr.length - 1) ? i + increase : (i + increase < 0 ? arr.length - 1 : 0);
            let first = (second - 1 >= 0) ? second - 1 : arr.length - 1;
            let third = (second == arr.length - 1) ? 0 : second + 1;
            arr.removeClass("first ");
            $(arr[first]).addClass('first');
            arr.removeClass(" second");
            $(arr[second]).addClass('second');
            $(arr[second]).find('.counterAnimate').each(function () {
                $(this).animateNumber({
                        number: $(this).text()
                    },
                    {
                        duration: 2000
                    });
            });

            arr.removeClass("third");
            $(arr[third]).addClass('third');

            break;
        }
    }
    if (autochange) {
        slidetimer = setTimeout(setslide, time);
    }
}
$(document).ready(function () {
    setslide();
    $("#vslideouter").mouseleave(function () {
        clearTimeout(slidetimer);
        setslide();
        //console.log("запускаем слайдер");
    });
    $("#vslideouter").mouseover(function () {
        clearTimeout(slidetimer);
    });
});



window.slideup = function slideup() {
    reverse = true;
    clearTimeout(slidetimer);
    setslide(false)
};

window.slidedown = function slidedown() {
    reverse = false;
    clearTimeout(slidetimer);
    setslide(false)
};