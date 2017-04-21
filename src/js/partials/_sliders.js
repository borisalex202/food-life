$(window).on('load', function() {
    $('.slider-gallery-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-gallery-nav'
    });
    $('.slider-gallery-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-gallery-main',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true
                }
            }
        ]
    });
    $('.slider-volunteer-history, .slider-letters').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: elements.arrowLeft,
        nextArrow: elements.arrowRight
    });
    $('.slider-city-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-city-nav'
    });
    $('.slider-city-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        asNavFor: '.slider-city-main',
        dots: true,
        arrows: true,
        vertical: true,
        centerMode: false,
        focusOnSelect: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    verticalSwiping: false,
                    centerMode: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    verticalSwiping: false,
                    centerMode: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    verticalSwiping: false,
                    centerMode: true
                }
            }
        ]
    });
    $('.slider-partners').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
$(window).on('load resize', function () {
    if ($(document).width() > grid.sm) {
        var widthTitle = elements.slickArrowHead.find('h2 span').width() + 50;

        elements.slickArrowHead.find('.slick-prev').css('left', widthTitle);
        elements.slickArrowHead.find('.slick-next').css('left', widthTitle + 30);
    } else {
        elements.slickArrowHead.find('.slick-prev').css('left', '50%');
        elements.slickArrowHead.find('.slick-next').css('left', '50%');
    }
    countArrows();
});

function countArrows() {
    $('.count-arrows').each(function () {
        var dotsCount = $(this).find('.slick-dots li').length,
            dotsWidth = $(this).find('.slick-dots li').outerWidth(),
            total = dotsCount * dotsWidth + 13;

        $(this).find('.slick-prev').css('margin-left', '-' + total + 'px');
        $(this).find('.slick-next').css('margin-right', '-' + total + 'px');
    });
}