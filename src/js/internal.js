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
        mobileParent: $('.mobile-menu').find('.has-child > a'),
        agreement: $('.agreement'),
        agreementBlock: $('.agreement-block'),
        agreementMobile: $('.agreement-mobile'),
        select: $('.select'),
        galleryContainer: $('.gallery-container'),
        galleryItem: $('.gallery-item'),
        cityItem: $('.city-list a'),
        cityChoice: $('.city-choice'),
        cityCurrent: $('.city-current')
    };
    var options = {
        headerHeight: elements.siteHeader.outerHeight(),
        speedOffset: 700
    };

    @@include('./partials/_mobileMenu.js')
    @@include('./partials/_galleryGrid.js')
    @@include('./partials/_sliders.js')

    $(window).on('load resize', function(){
      if($(document).width() > grid.md) {
        elements.agreement.stick_in_parent({
            parent: $('.content-page-left'),
            inner_scrolling: true,
            offset_top: parseInt(options.headerHeight) + 10
        });
      } else {
        elements.agreement.trigger("sticky_kit:detach")
      }
      if($(document).width() < grid.lg) {
        var logoNameWidth = '-' + parseInt($('.logo .name').width());

        elements.cityCurrent.css({
          marginLeft: logoNameWidth + 'px'
        });
      } else {
        elements.cityCurrent.css({
          marginLeft: '0px'
        });
      }

    });

    $('.tab-nav a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })

    elements.select.styler();

    elements.agreement.find('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - options.headerHeight - 10
          }, options.speedOffset);
          return false;
        }
      }
    });

    elements.agreementMobile.on('click', function(){
      $(this).closest(elements.agreementBlock).toggleClass('active');
    });
    elements.agreement.find('a').on('click', function(){
      $(this).closest(elements.agreementBlock).removeClass('active');
    });

    elements.cityCurrent.on('click', function(e){
      e.preventDefault();
      $(this).closest(elements.cityChoice).toggleClass('active');
    })

    elements.cityItem.on('click', function(e){
      var text = $(this).text();

      e.preventDefault();
      elements.cityCurrent.find('span').text(text);
      elements.cityChoice.removeClass('active');
    });

    $(document).mouseup(function (e){
  		var el = elements.cityChoice;
  		if (!el.is(e.target)
  		    && el.has(e.target).length === 0) {
  					el.removeClass('active');
  		}
  	});

})(jQuery);
