$(window).on('load resize', function(){
	if($(document).width() > grid.md) {
		var count = 1,
				iter = 0;
		elements.galleryItem.each(function(){
			$(this).removeClass('big clear-left');

			if($(this).is(':first-child')) {
				count = 1;
				iter = 0;
			}
			if(count === 4 && iter === 0) {
				$(this).addClass('big');
				count = 0;
				iter = 1;
			}
			if(count === 7 && iter === 1) {
				$(this).addClass('clear-left');
			}
			if(count == 8 && iter === 1) {
				$(this).addClass('big');
				count = 0;
				iter = 0;
			}
			count++;
		});
	}
	if($(document).width() > grid.sm && $(document).width() < grid.md) {
		var count = 1,
				iter = 0;
		elements.galleryItem.each(function(){
			$(this).removeClass('big clear-left');

			if(count === 3 && iter === 0) {
				$(this).addClass('big');
				count = 0;
				iter = 1;
			}
			if(count == 5 && iter === 1) {
				$(this).addClass('big');
				count = 0;
				iter = 0;
			}
			count++;
		});
	}
});
