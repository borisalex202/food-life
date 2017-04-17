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

$(window).on('load resize', function() {
	if($(document).width() > grid.sm) {
        var widthTitle = elements.slickArrowHead.find('h2 span').width() + 50;

        elements.slickArrowHead.find('.slick-prev').css('left', widthTitle);
        elements.slickArrowHead.find('.slick-next').css('left', widthTitle + 30);
    } else {
        elements.slickArrowHead.find('.slick-prev').css('left', '50%');
        elements.slickArrowHead.find('.slick-next').css('left', '50%');
	}
});