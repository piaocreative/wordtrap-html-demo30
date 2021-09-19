$( document ).ready( function() {

    var slider = $('.range-slider'),
        range = $('#range'),
        value = $('.slider_val');
      
    slider.each(function() {
  
      value.each(function() {
        var value = $(this).prev().attr('value');
        $(this).html(value);
      });
  
      range.on('input', function() { 
        value.html($(this).val())
      });

    });

    if ( $( '.banners' ).length ) {
      $('.banners').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows:false
      });

      $(".banner-next").click(function(e) {
        e.preventDefault();
        $('.banners').slick('slickNext');
      })

      $('.banners').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
          var i = (currentSlide ? currentSlide : 0) + 1;
          $(".active").text("0"+i);
          $(".total").html("0"+slick.slideCount)
      });
    }

    if ( $( '.slick-item' ).length ) {
      $('.slick-item').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows:true
      });
    }

    if ( $( '.posts-slick' ).length ) {
      $('.posts-slick').slick({
        dots: false,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }

    if ( $( '.products' ).length ) {
      $('.products').slick({
        dots: false,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $(".product-next").click(function(e) {
        e.preventDefault();
        $('.products').slick('slickNext');
      })

      $('.products').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
          var i = (currentSlide ? currentSlide : 0) + 1;
          $(".product-active").text("0"+i);
          $(".product-total").html("0"+slick.slideCount)
      });
    }

    if ( $( '.testimonial-slick' ).length ) {
      $(".testimonial-slick").slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        lazyLoad: "ondemand",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              centerMode: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }

    if ( $( '.about-slick' ).length ) {
      $(".about-slick").slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        lazyLoad: "ondemand",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              centerMode: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }

    if ( $( '.timeline .events' ).length ) {
      $( '.timeline .events' ).slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          prevArrow: $('.heading-arrow .prev-arrow'),
          nextArrow: $('.heading-arrow .next-arrow'),
          responsive: [
            {
              breakpoint: 991,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
      });
    }
    
    if ( $( '.logos' ).length ) {
      $('.logos').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      });
    }
});