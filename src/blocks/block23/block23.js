$('.block23__btn').on('click', function() {
    let $th = $(this),
        cBlock23ItemTab = '.block23__item-tab',
        sBlock23ItemTabActive = 'block23__item-tab_active';

    $('.block23__btn').removeClass('block23__btn_active');
    $th.addClass('block23__btn_active');
    $(cBlock23ItemTab).removeClass(sBlock23ItemTabActive);
    $(cBlock23ItemTab + '[data-tab=' + $th.attr('data-btn') + ']').addClass(sBlock23ItemTabActive);
});