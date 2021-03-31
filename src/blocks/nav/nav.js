let $nav = $('.nav'),
    $navSubmenu = $('.nav__submenu'),
    sNavActive = 'nav_active',
    sNavOpen = 'html_nav-open',
    sNavHiddenOpen = 'html_nav-hidden-open';

function fixedMenu() {
    window.$html.toggleClass('html_nav-scroll', ($(window).scrollTop() > 140) )
}

$(window).on("load", function() {
    $('.nav__burger, .nav__hidden-close').on('click', () => {
        window.$html.toggleClass(sNavOpen + ' ' + sNavHiddenOpen);
    });

    $('.nav__close-box').on('click', () => {
        window.$html.removeClass(sNavOpen);
        $nav.removeClass(sNavActive);
        $navSubmenu.css('display', 'none');
        setTimeout(function () {
            $navSubmenu.css('display', '');
        }, 1000);
    });

    fixedMenu();
    $(window).on('scroll', fixedMenu);

    $('.nav__item-box').on('mouseover mouseout click', () => {
        $nav.toggleClass(sNavActive);
        window.$html.toggleClass(sNavOpen);
    });

    window.$html.on('SORP_changeModal', () => {
        window.$html.removeClass(sNavOpen + ' ' + sNavHiddenOpen);
    });
});

/*let count = Math.round($('.block20').outerWidth() / $('.block20__item').first().outerWidth()),
    k = 1,
    arr = [];

$('.nav .nav__item-box').each(function() {
    let $this = $(this);

    $this.find('.block20__item').each(function () {
        if (count / k === 1) {
            k = 0;
            arr.push($(this).outerHeight());
        }
        k++;
    });

    $this.find('.block11__item-inner').each(function(i) {
        $(this).outerHeight(arr[i]);
    });
});*/