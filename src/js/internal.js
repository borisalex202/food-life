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
        cityCurrent: $('.city-current'),
        arrowLeft: '<button type="button" class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
        arrowRight: '<button type="button" class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
        volunteerItem: $('.volunteer-item'),
        animateBlock: $('.animate-block'),
        animateItem: $('.animate-item'),
        showAnimateItems: $('.show-items'),
        slickArrowHead: $('.slick-arrow-head')
    };
    var options = {
        headerHeight: elements.siteHeader.outerHeight(),
        speedOffset: 700
    };

    @@include('./partials/_mobileMenu.js')
    @@include('./partials/_galleryGrid.js')
    @@include('./partials/_sliders.js')
    @@include('./partials/_animations.js')

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
          setTimeout(function () {
              var logoNameWidth = '-' + parseInt($('.logo .name').width());

              elements.cityCurrent.css({
                  marginLeft: logoNameWidth + 'px'
              });
          }, 500)
      } else {
        elements.cityCurrent.css({
          marginLeft: '0px'
        });
      }

    });

    $('.tab-nav a').click(function (e) {
      e.preventDefault();
      $(this).tab('show')
    });

    elements.select.styler();

    $('.smooth-scoll').on('click', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - options.headerHeight
          }, options.speedOffset);
          return false;
        }
      }
    });
    elements.agreement.find('a').on('click', function() {
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
    });

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

    var showLetter = 0;
    $('.letter-description p:hidden').addClass('letter-hide');
    $('.letter-more').on('click', function (e) {
        e.preventDefault();
        $(this).text(function(i, text){
            return text === "Читать полностью" ? "Свернуть" : "Читать полностью";
        });
        if(showLetter == 0) {
            $(this).parent().find('.letter-hide').slideDown();
            showLetter = 1;
        } else {
            $(this).parent().find('.letter-hide').slideUp();
            showLetter = 0;
        }
    });

})(jQuery);
