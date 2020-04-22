$(function(){

    $('.slider__inner').slick({
        dots: true,
        arrows: true
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
      