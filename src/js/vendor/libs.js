import "./import/jquery.cookie.js";
import "./import/variables.js";
import "./import/fastdom.js"
import "./import/throttle-debounce.js";
//import "./import/fancybox.js";

import "./import/w.js";
import "./import/setEqualHeight.js";
import "./import/isRetina.js";
import "./import/onScreen.js";
import "./import/isOnScreen.js";
import "./import/loadSrcOrBg.js";
import "./import/isTouch.js";

// modx revo
//import "./import/default.js";

// old
// import "./import/old.js";
// import "./import/lazy.js";

window.onScreen($('.lazy'), window.loadSrcOrBg, 200);

$(function(){
    $('.anchor[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $('html, body').animate({scrollTop: dn}, 1000);
    });
});

var th = $(this);
var bindLabels, guid;

guid = function () {
    var s4;
    s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};
window.guid = guid;
bindLabels = function () {
    $('input[type="checkbox"], input[type="radio"]').not('[id]').each(function () {
        var id = guid();
        th = $(this);
        th.attr('id', id);
        if (th.next().is('label')) {
            return th.next().attr('for', id);
        }
    });
    return $('label').not('[for]').each(function () {
        var id = guid();
        th = $(this);
        if (th.next().is('input,textarea,select')) {
            th.attr('for', id);
            return th.next().attr('id', id);
        } else if (th.prev().is('input,textarea,select')) {
            th.attr('for', id);
            return th.prev().attr('id', id);
        }
    });
};
bindLabels();

window.onScreen($('#map'), function() {
    $('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84142.93801242771!2d55.11920432886234!3d25.109796720172486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5b5b3fffff%3A0xbe5aa9347ed5d5e1!2sSORP%20Business%20Centre!5e0!3m2!1sru!2sru!4v1580725392796!5m2!1sru!2sru" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="">');
} ,  400);