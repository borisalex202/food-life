elements.iconMenu.on('click', function () {
    $(this).toggleClass('active');
    elements.siteHeader.toggleClass('show-menu');
    elements.mobileMenu.toggleClass('active');
});

elements.mobileParent.on('click', function () {
    if( $(document).width() < grid.md ) {
        $(this).closest('.has-child').find('.submenu').slideToggle();
    }
});