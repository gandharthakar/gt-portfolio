import './modules/themeSwitcher.js';

// --> START DOM.Ready();
$(function () {

    // Toggle menu on button click.
    $('.js-toggle-menu').on("click", function () {
        const isActive = $(this).hasClass("active");
        let menu = $('.js-site-nav');
        if (!isActive) {
            $(this).addClass("active");
            menu.show();
        } else {
            $(this).removeClass("active");
            menu.hide(1, function () {
                $(this).removeAttr('style');
            });
        }
    });

    // Hide menu on outside click.
    $(document).on("click", function (event) {
        let $trigger = $('.js-toggle-menu');
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $('.js-site-nav').hide(1, function () {
                $(this).removeAttr('style');
            });
            $trigger.removeClass('active');
        }
    });

}); // <-- End od DOM.Ready();