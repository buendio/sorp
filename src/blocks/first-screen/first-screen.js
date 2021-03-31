if(window.getW() > window.sorpBP.mdMin){
    $(window).on("load", function() {
        let $logo = $(".first-screen__logo"),
            src = $logo.attr("data-bg"),
            img = document.createElement("img"),
            $logo_box = $logo.closest(".first-screen__logo-box"),
            height_content = $(".first-screen__title").height() + $(".first-screen__text").height() + 50;

        if(window.getW() > window.sorpBP.lgMin){
            height_content += 100;
        }

        $logo_box.width(height_content).height(height_content);

        img.onload = function() {
            $logo.attr("style", "background-image: url(\"" + src + "\");").removeAttr("data-bg");
            $logo_box.addClass("first-screen__logo-box_animate");
        };

        img.src = src;
    });
}