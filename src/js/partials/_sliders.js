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
$('.slider-volunteer-history').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
	prevArrow: elements.arrowLeft,
	nextArrow: elements.arrowRight
});