$(function(){

    $('.slider__inner').slick({
        dots: true,
        arrows: true
    });
    $('.slider-img-inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        infinite: true,
        speed: 500
    });
    $('.postslider__slider-inner').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 500
    });



    $(".loadMore").on('click', function (e) {
        e.preventDefault();
    });
    $("#myBtn").on('click', function (e) {
        e.preventDefault();
    });
    
    

    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementById("closer");

    btn.onclick = function(){
        modal.style.display = "block";
        $('#videoPlayer').attr("src","https://www.youtube.com/embed/tFIBOQqBUs0");

    }
    span.onclick = function(){
        modal.style.display = "none";
            $('#videoPlayer').attr("src"," ");
    }

    window.onclick = function(event){
        if (event.target == modal) {
            modal.style.display = "none";
            $('#videoPlayer').attr("src"," ");

        }
    };
    

    var mixer = mixitup('.projects__inner-box');
  });
      