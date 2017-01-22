$(document).ready(function() {
    $("h1").delay(200).animate({opacity: "1"}, 2000);
    $(".fa-linkedin-square").delay(400).animate({opacity: "1"}, 2000);
    $(".fa-github").delay(600).animate({opacity: "1"}, 2000);
    $(".fa-instagram").delay(800).animate({opacity: "1"}, 2000);
});

jQuery(function($) {

    var currentMousePos = { x: -1, y: -1};
    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;

        $('#location').html('x: ' + currentMousePos.x + " , " + ' y: ' + currentMousePos.y)

        var width = Number($(window).width());
        var height = Number($(window).height());

        var left_pos_l = ( ( currentMousePos.x / (width * 2) ) * 55 ) + 10;
        var right_pos_r =  (( currentMousePos.x / (width * 2)  ) * 55) + 22;
        var top_pos_l = ( currentMousePos.y / (height) ) * 40 + 8;
        var top_pos_r = ( currentMousePos.y / (height) ) * 40 + 8;
        $('#location2').html('x: ' + left_pos_l + " , " + ' y: ' + top_pos_l)
        $('#location3').html('x: ' + right_pos_r + " , " + ' y: ' + top_pos_r)
                
        $('.eye-l').css('left',left_pos_l).css('top', top_pos_l);
        $('.eye-r').css('left',right_pos_r).css('top',top_pos_r);
    }); 
});