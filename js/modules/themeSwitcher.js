// Globals

let lstm_key = 'theme-mode';

function check_theme_mode_on_page_load() {
    let all_opts = $('.js-theme-mod');
    let ls_tmod = localStorage.getItem(lstm_key);
    all_opts.removeClass('active');
    if (!ls_tmod) {
        let tmod = '';
        localStorage.setItem(lstm_key, JSON.stringify(tmod));
        all_opts.eq(0).addClass('active');
    } else {
        let ls_gtmod = JSON.parse(localStorage.getItem(lstm_key));
        if (ls_gtmod == '') {
            all_opts.eq(0).addClass('active');
        } else if (ls_gtmod == 'light') {
            $("html").attr('theme-mode', 'light');
            all_opts.eq(1).addClass('active');
        } else {
            $("html").attr('theme-mode', 'dark');
            all_opts.eq(2).addClass('active');
        }
    }
}

// --> START DOM.Ready();
$(function () {

    // Check Theme Mode On Page Load.
    check_theme_mode_on_page_load();

    // Toggle theme mode on button click.
    $('.js-toggle-theme').on('click', function () {
        const isActive = $(this).hasClass("active");
        let menu = $('.js-theme-menu');
        if (!isActive) {
            $(this).addClass("active");
            menu.show();
        } else {
            $(this).removeClass("active");
            menu.hide(1, function () {
                $(this).removeAttr('style');
            });
        }
    })

    // Toggle Theme Mode.
    $('.js-theme-mod').on('click', function () {
        // event.stopPropagation();

        // Remove 'Active' Class From All Items.
        $('.js-theme-mod').removeClass('active');

        // Add 'Active' Class On Current Clicked Item.
        $(this).addClass('active');

        // Get Theme String
        let theme = $(this).attr('data-prefered-theme');

        // Set Theme 
        if (theme == '') {
            $("html").removeAttr('theme-mode');
        } else if (theme == 'light') {
            $("html").attr('theme-mode', 'light');
        } else {
            $("html").attr('theme-mode', 'dark');
        }

        // Save Theme In LocalStorage for Page Refresh.
        localStorage.setItem(lstm_key, JSON.stringify(theme));

        // Hide parent in last.
        $(this).parents("ul").hide(1, function () {
            $(this).removeAttr('style');
        });
        $('.js-toggle-theme').removeClass('active');
    });

    // Hide menu on outside click.
    $(document).on("click", function (event) {
        let $trigger = $('.js-toggle-theme');
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $('.js-theme-menu').hide(1, function () {
                $(this).removeAttr('style');
            });
            $trigger.removeClass('active');
        }
    });

}); // <-- End od DOM.Ready();