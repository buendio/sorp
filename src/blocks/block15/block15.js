let block15 =  document.querySelectorAll('.block15');

if (block15.length) {
    for (let index = 0; index < block15.length; index++) {
        let block = block15[index];
        let items = block15[index].querySelectorAll('.block15__item');

        for (let i = 0; i < items.length; i++) {
            let inner_styles =
                '.block15[data-block="'+index+'"] .block15__item-container[data-index="'+i+'"]:hover {'
                + 'max-height: '+ items[i].clientHeight + 'px;'
                + '}';

            let styles_cont = document.createElement('style');
            styles_cont.innerText = inner_styles;
            block.prepend(styles_cont);
        }
    }
}