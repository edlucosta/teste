/* ----------------- Start JS Document ----------------- */
(function($) {
    "use strict";

    
    //Back Top Link

    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });
    
    $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    // For Wow js
    new WOW().init();



})(jQuery);













