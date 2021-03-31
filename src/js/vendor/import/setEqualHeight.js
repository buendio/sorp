window.setEqualHeight = function(columns, parent) {
    let heightArrow = [],
        countColumn = Math.round(parent.innerWidth() / columns.first().innerWidth()),
        countEndLine = 0, countEndLineLoop = 0, maxHeight;

    columns.each(function() {
        let $this = $(this),
            currentHeight = $this.outerHeight();

        countEndLine++;
        heightArrow.push(currentHeight);

        if (countEndLine / countColumn === 1) {
            maxHeight = Math.max.apply(null, heightArrow);

            for (let i = countEndLineLoop; i < countEndLineLoop + countColumn; i++) {
                columns.eq(i).outerHeight(maxHeight);
            }

            countEndLineLoop += countEndLine;
            countEndLine = 0;
            heightArrow = [];
        }
    });
};