let $block1 = $('.block1'),
    $block1Item = $('.block1__item'),
    cBlock1Content = '.block1__content',
    cBlock1Head = '.block1__head',
    sBlock1HeadActive = 'block1__head_active';

function setHeightBlock1() {
    $block1.find(cBlock1Content + ',' + cBlock1Head).removeAttr('style');

    if (window.getW() > sorpBP.mdMin) {
        $block1.each(function () {
            let $this = $(this);

            window.setEqualHeight($this.find(cBlock1Content), $this);
            window.setEqualHeight($this.find(cBlock1Head), $this);
        });
    }
}

function setActiveScrollBg() {
    $block1Item.each(function(){
        let $this = $(this).find(cBlock1Head);

        if (isOnScreen($this)) {
            setTimeout(function() {
                $this.addClass(sBlock1HeadActive)
            }, 800);
        } else {
            $this.removeClass(sBlock1HeadActive)
        }
    });
}

function loadScrollPattern() {
    $block1Item.each(function(){
        if (isOnScreen($(this), 200)) {
            $block1Item.addClass('block1__item_load-pattern');
        }
    });
}

window.$window.on('scroll', window.throttle(window.speed * 2, function(){
    if (window.isTouch()) {
        setActiveScrollBg();
    }
    loadScrollPattern();
}));

window.$window.on('resize', setHeightBlock1);

window.onload = function() {
    setHeightBlock1();
};

loadScrollPattern();