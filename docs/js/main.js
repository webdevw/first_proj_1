
jQuery(document).ready(function($){
    var $window=$(window),
    $target=$(".header"),
    $h=$target.offset().top;
    $window.on('scroll',function(){
        var scrollTop=window.pageYOffset||document.documentElement.scrollTop;
        if(scrollTop>$h){
            $target.addClass("topchik");
            return;
        }else{
            $target.removeClass("topchik");
        }
        return;
    });
});


$(function(){
    
    $('.slider__inner').slick({
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 899,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.postslider__slider-inner').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 845,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
    $('.slider-img-inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        infinite: true,
        speed: 500
    });
    
    
    // $(".loadMore").on('click', function (e) {
    //     e.preventDefault();
    // });
    // $("#myBtn").on('click', function (e) {
    //     e.preventDefault();
    // });
    
    
    
    // var modal = document.getElementById('myModal');
    // var btn = document.getElementById("myBtn");
    // var span = document.getElementById("closer");
    
    // btn.onclick = function(){
    //     modal.style.display = "block";
    //     $('#videoPlayer').attr("src","https://www.youtube.com/embed/tFIBOQqBUs0");
        
    // }
    // span.onclick = function(){
    //     modal.style.display = "none";
    //     $('#videoPlayer').attr("src"," ");
    // }
    
    // window.onclick = function(event){
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //         $('#videoPlayer').attr("src"," ");
            
    //     }
    // };
    
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
    
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
     new WOW().init();
    
    var mixer = mixitup('.projects__inner-box');
});
