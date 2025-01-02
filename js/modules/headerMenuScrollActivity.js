$(function () {

    /* ------ hEADER MENU SCROLL ACTIVE NAV LINKS WITH RESPECTIVE SECTION SCROLL POSITION ------ */

    // Cache selectors
    // let lastId,
    //     topMenu = $("#site-nav"),
    //     // All list items
    //     menuItems = topMenu.find("a"),
    //     // Anchors corresponding to menu items
    //     scrollItems = menuItems.map(function () {
    //         var item = $($(this).attr("href"));
    //         if (item.length) { return item; }
    //     });

    // // Bind click handler to menu items
    // // so we can get a fancy scroll animation
    // menuItems.click(function (e) {
    //     let offset = 0;
    //     let winw = $(window).width();
    //     if (winw < 992) {
    //         offset = 93;
    //     } else {
    //         offset = 103;
    //     }

    //     let href = $(this).attr("href"),
    //         offsetTop = href === "#" ? 0 : $(href).offset().top - offset;
    //     $('html, body').stop().animate({
    //         scrollTop: offsetTop
    //     }, 300);

    //     e.preventDefault();
    // });

    // // Bind to scroll
    // $(window).scroll(function () {
    //     let topMenuHeight_2 = $('.js-hdrotr').outerHeight();
    //     // Get container scroll position
    //     let fromTop = $(this).scrollTop() + topMenuHeight_2 + 3;

    //     // Get id of current scroll item
    //     let cur = scrollItems.map(function () {
    //         if ($(this).offset().top < fromTop) {
    //             return this;
    //         }
    //     });
    //     // Get the id of the current element
    //     cur = cur[cur.length - 1];
    //     let id = cur && cur.length ? cur[0].id : "";

    //     if (lastId !== id) {
    //         lastId = id;
    //         // Set/remove active class
    //         menuItems
    //             .parent().removeClass("active")
    //             .end().filter("[href='#" + id + "']").parent().addClass("active");
    //     }
    // });

}); // End of $( document ).ready() Function.