// Слайдер на главной
$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    });
});

//Каталог на главной
$(function() {
    $(".sorting__item").click(function() {
        $(".sorting__item").removeClass("active");         
        $(this).toggleClass("active");
    })
});

//Диапазон цен на главной
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 30000,
      values: [ 5000, 20000 ],
      slide: function( event, ui ) {
        $( "#amount_1" ).val( ui.values[ 0 ] );
        $( "#amount_2" ).val( ui.values[ 1 ] );
      }
    });
    $( "#amount_1" ).val( $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount_2" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  } );

// Бургер на мобильных телефонах
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
    });
});

//Анимации при скроллинге

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//
////Табы на главной
//(function($) {
//$(function() {
//  
//  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
//    $(this)
//      .addClass('active').siblings().removeClass('active')
//      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
//  });
//  
//});
//})(jQuery);
//
//
////Выпадающее меню
//$(document).ready(function() {
//    $('.open-sub').click(function(event) {
//        $('.open-sub, .sub-menu-block').toggleClass('active');
//    });
//});
//
////Табы на карточке товара
//(function($) {
//$(function() {
//  
//  $('ul.tabs__caption-product').on('click', 'li:not(.active)', function() {
//    $(this)
//      .addClass('active').siblings().removeClass('active')
//      .closest('div.tabs-product').find('div.tabs__content-product').removeClass('active').eq($(this).index()).addClass('active');
//  });
//  
//});
//})(jQuery);
//
//// Слайдер на карточке товара
//
//$(document).ready(function(){
//    $('.other-goods__items').slick({
//        arrows:true,
//        dots:false,
//        slidesToShow: 3,
//        slidesToScroll: 1,
//
//        
//    });
//});
//
////Большой слайдер на карточке
//
//$(document).ready(function(){
//    $('.viewed__slider').slick({
//        arrows:true,
//        dots:false,
//        slidesToShow: 4,
//        slidesToScroll: 1,
//
//        
//    });
//});
//
////Приоритет загрузки JS(Оптимизация скорости загрузки)
//
//function downloadJSAtOnload() {
//      var element = document.createElement("script");
//      element.src = "script.js";
//      document.body.appendChild(element);
//   }
//   if (window.addEventListener)
//      window.addEventListener("load", downloadJSAtOnload, false);
//   else if (window.attachEvent)
//      window.attachEvent("onload", downloadJSAtOnload);
//   else window.onload = downloadJSAtOnload;
//
//
////Ассортимент - фильтр
//$(document).ready(function() {
//    $('.open__sub-filtr').click(function(event) {
//        $('.open__sub-filtr, .sub-filtr').toggleClass('active');
//    });
//});
//$(document).ready(function() {
//    $('.open__sub-filtr-2').click(function(event) {
//        $('.open__sub-filtr-2, .sub-filtr-2').toggleClass('active');
//    });
//});
//$(document).ready(function() {
//    $('.open__sub-filtr-3').click(function(event) {
//        $('.open__sub-filtr-3, .sub-filtr-3').toggleClass('active');
//    });
//});
//$(document).ready(function() {
//    $('.open__sub-filtr-4').click(function(event) {
//        $('.open__sub-filtr-4, .sub-filtr-4').toggleClass('active');
//    });
//});
//$(document).ready(function() {
//    $('.open__sub-filtr-5').click(function(event) {
//        $('.open__sub-filtr-5, .sub-filtr-5').toggleClass('active');
//    });
//});
//
////Ассортимент - диапазон слайдер
//$( function() {
//    $( "#slider-range" ).slider({
//      range: true,
//      min: 0,
//      max: 30000,
//      values: [ 75, 300 ],
//      slide: function( event, ui ) {
//        $( "#amount" ).val( "от" + " " + ui.values[ 0 ] + " " + "руб" );
//        $( "#amount_1" ).val( "до" + " " + ui.values[ 1 ] + " " + "руб" );
//      }
//    });
//    $( "#amount" ).val( "от" + " " + $( "#slider-range" ).slider( "values", 0 ) + " "  + "руб" );
//    $( "#amount_1" ).val( "до" + " " + $( "#slider-range" ).slider( "values", 1 ) + " "  + "руб" );
//  } );
