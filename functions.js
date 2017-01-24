$(document).ready(function() {
    $("h1").delay(200).animate({opacity: "1"}, 2000);
    $(".fa-linkedin-square").delay(400).animate({opacity: "1"}, 2000);
    $(".fa-github").delay(600).animate({opacity: "1"}, 2000);
    $(".fa-instagram").delay(800).animate({opacity: "1"}, 2000);
    
    $('.menu-toggle').on('click', function(){
        $('.full-menu').toggleClass('full-menu-open');
    })
});

jQuery(function($) {

    var currentMousePos = { x: -1, y: -1};
    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;

        //delete this later
        $('#location').html('x: ' + currentMousePos.x + " , " + ' y: ' + currentMousePos.y)

        var width = Number($(window).width());
        var height = Number($(window).height());

        var left_pos_l = ( ( currentMousePos.x / (width * 2) ) * 55 ) + 8;
        var right_pos_r =  (( currentMousePos.x / (width * 2)  ) * 55) + 20;
        var top_pos_l = ( currentMousePos.y / (height) ) * 40 + 8;
        var top_pos_r = ( currentMousePos.y / (height) ) * 40 + 8;
        //and these
        $('#location2').html('x: ' + left_pos_l + " , " + ' y: ' + top_pos_l)
        $('#location3').html('x: ' + right_pos_r + " , " + ' y: ' + top_pos_r)

        if(top_pos_l <= 48 && top_pos_r <= 48) {
            if(Math.pow(left_pos_l - 32, 2) + Math.pow(top_pos_l - 32, 2) < 1024 &&
            Math.pow(right_pos_r - 32, 2) + Math.pow(top_pos_r - 32, 2) < 1024) {
                $('.eye-l').css('left',left_pos_l).css('top', top_pos_l);
                $('.eye-r').css('left',right_pos_r).css('top',top_pos_r);
            }
        }
        else {
            $('.eye-l').css('left',23).css('top',27);
            $('.eye-r').css('left',35).css('top',27);
        }
    }); 
});