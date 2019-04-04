$(function(){

    // $('.menu__btn').click(function(){
    //     $('.menu ul').slideToggle();
    // });

    // $('.menu__btn').click(function() {
    //     $('.menu__list').toggleClass('shown');
    // });


    $('.slider').slick({
      dots: false,
       prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    });

     $('.news-big-block').slick({
          dots: false,
           prevArrow: '<button type="button" class="slick-btn-news slick-prev-news"></button>',
            nextArrow: '<button type="button" class="slick-btn-news slick-next-news"></button>',
        });

});