(function($) {

    var grid = {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1200
    };
    var elements = {
        siteHeader: $('.site-header'),
        iconMenu: $('.icon-menu'),
        mobileMenu: $('.mobile-menu'),
        mobileParent: $('.mobile-menu').find('.has-child > a')
    };
    var options = {

    };

    @@include('./partials/_mobileMenu.js')

})(jQuery);