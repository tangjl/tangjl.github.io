$(document).ready(function() {
    $("h1").delay(200).animate({opacity: "1"}, 2000);
    $(".fa-linkedin-square").delay(400).animate({opacity: "1"}, 2000);
    $(".fa-github").delay(600).animate({opacity: "1"}, 2000);
    $(".fa-instagram").delay(800).animate({opacity: "1"}, 2000);
    
    $('.menu-toggle').on('click', function(){
        $('.full-menu').toggleClass('full-menu-open');
    })

    $('.menu-item').on('click', function(){
        $('.full-menu').toggleClass('full-menu-open');
    })
    
});

function animateMenu(x) {
    x.classList.toggle("change");
}