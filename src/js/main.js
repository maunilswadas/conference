$(document).ready(function (){
    $("#scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#main-page").offset().top
        }, 600);
    });
});
