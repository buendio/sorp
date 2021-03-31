$(window).on("load", function() {
    $('.modal__checkbox').on('change', function() {
        let $this = $(this),
            $bg_modal = $(".bg_modal[for=" + $this.attr("id") + "]");

        window.$html.toggleClass('html_overflow-modal-hidden').trigger('SORP_changeModal');

        $bg_modal.toggleClass('bg_modal-block').next().toggleClass('modal_active');
        setTimeout(() => {
            $bg_modal.toggleClass('bg_modal-active');
        });
    });

    $('.js-modal').on('click', function () {
        let $th = $(this),
            $modal = $('.modal'),
            dataReason = $th.data('reason'),
            dataTitle = $th.data('title'),
            $modalRight = $th.find('.modal_none');

        if (dataReason) {
            $modal.find('.callOrderReason').val(dataReason);
        } else {
            $modal.find('.callOrderReason').val('');
        }

        if (dataTitle) {
            $('.modal_dynamic-title').find('.modal__title').text(dataTitle);
        }

        if (($modalRight.length) && (typeof $modalRight === 'object')) {
            $('.modal__right').html('').append($modalRight.html());
        }
    });

    let $messenger = $('.modal__messengers-item'),
        cMessengerActive = 'modal__messengers-item_active';

    $messenger.on('click', function () {
        let $th = $(this);

        $messenger.removeClass(cMessengerActive);
        $th.addClass(cMessengerActive);
        $('.modal__messengers-input').val($th.data('messenger'));
    });
});