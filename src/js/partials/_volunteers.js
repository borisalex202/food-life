$(window).on('load resize', function() {
    elements.volunteerItem.removeClass('volunteer-hide').attr('style', '');
    if($(document).width() > grid.md) {
        var count = 1;
        elements.volunteerItem.each(function () {
            if (count > 4) {
                var itemHeight = $(this).outerHeight();

                $(this).addClass('volunteer-hide').data('height', itemHeight).height(0).css({
                    marginTop: 0,
                    opacity: 0
                });
            }
            count++;
        });
    }
    if($(document).width() > grid.sm && $(document).width() < grid.md) {
        var count = 1;
        elements.volunteerItem.each(function () {
            if (count > 2) {
                var itemHeight = $(this).outerHeight();

                $(this).addClass('volunteer-hide').data('height', itemHeight).height(0).css({
                    marginTop: 0,
                    opacity: 0
                });
            }
            count++;
        });
    }
    if($(document).width() > 0 && $(document).width() < grid.sm) {
        var count = 1;
        elements.volunteerItem.each(function () {
            if (count > 1) {
                var itemHeight = $(this).outerHeight();

                $(this).addClass('volunteer-hide').data('height', itemHeight).height(0).css({
                    marginTop: 0,
                    opacity: 0
                });
            }
            count++;
        });
    }
});
var showItems = 0;
$('.show-volunteer').on('click', function () {
    $(this).text(function(i, text){
        return text === "Показать всех" ? "Скрыть часть" : "Показать всех";
    });

    if(showItems == 1) {

        $('.volunteer-hide').each(function () {
            $(this).animate({
                height: 0,
                marginTop: 0,
                opacity: 0
            }, 300);
        });
        showItems = 0;
    } else {

        $('.volunteer-hide').each(function () {
            var itemHeight = $(this).data('height');


            $(this).animate({
                height: itemHeight,
                marginTop: 65,
                opacity: 1
            }, 300);
        });
        showItems = 1;
    }
});