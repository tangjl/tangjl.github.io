$(document).ready(function(){

$(".dropdown-nav").hide();

$(".nav-item a").on('click', function() {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    }  
});

$(".nav-item-2 a").on('click', function() {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    }  
});

$(".nav-button").click(function() {
    $(".dropdown-nav").slideToggle();
})

$(".nav-button-2").click(function() {
    $(".dropdown-nav").slideToggle();
})

$(".item-link-2").click(function() {
    $(".dropdown-nav").slideToggle();
})

});
