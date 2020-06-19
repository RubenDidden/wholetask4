// ACCORDION //
$(document).ready(function () {
    $('#accordion').accordion({
        collapsible: true,
        heightStyle: 'content',
        animate: 1200,
        fluid: true,
    });
});


// THEME SWITCH
var count = true;

var toggle = $('.toggle');
var bol = $('.bol');
var body = $('body');


    

toggle.click(function () {
    console.log(count);
    /* change logo */
    if ($("#logo").attr("src") == "img/pinklogo@2x.png")
    {
        $("#logo").attr("src", "img/whitelogo@2x.png");
    }
    else  
    { 
        $("#logo").attr("src", "img/pinklogo@2x.png");
    }    

    /* change sun icon */
    if ($("#sun").attr("src") == "img/dark/sun@2x.png")
    {
        $("#sun").attr("src", "img/sun@2x.png");
    }
    else  
    { 
        $("#sun").attr("src", "img/dark/sun@2x.png");
    }   

    /* change leren img*/
    if ($("#block1").attr("src") == "img/leer-wit.png")
    {
        $("#block1").attr("src", "img/leer.png");
    }
    else  
    { 
        $("#block1").attr("src", "img/leer-wit.png");
    }   
   
    /* change codeer img*/
    if ($("#block2").attr("src") == "img/dark/codeer@2x.png")
    {
        $("#block2").attr("src", "img/codeer.png");
    }
    else  
    { 
        $("#block2").attr("src", "img/dark/codeer@2x.png");
    }   

    /* change codeer img*/
    if ($("#pijl").attr("src") == "img/pijl-wit.png")
    {
        $("#pijl").attr("src", "img/pijl@2x");
    }
    else  
    { 
        $("#pijl").attr("src", "img/pijl-wit.png");
    }   






        $("body").toggleClass("dark-mode")
});

 
// PLAY & PAUSE SWITCH




$('video').each(function (i, el) {
    var p = $(el).parent();
    $('.playtoggle', p).click(function () {
        console.log($(this));
        if ($(this).hasClass('play')) {
            $(this).removeClass('play');
            $(this).find('.playbutton').css({
                "visibility": "visible",
            });
            $(this).find('.pausebutton').css({
                "visibility": "hidden",
            });
            el.pause();
        } else {
            $(this).addClass('play');
            $(this).find('.playbutton').css({
                "visibility": "hidden",
            });
            $(this).find('.pausebutton').css({
                "visibility": "visible",
            });
            el.play();
        }
    });
});

$(document).mousemove(function () {
    if ($(".player:hover").length != 0) {
        $('.playerbuttons').css({
            "opacity": "85%",
        });
    } else {
        $('.playerbuttons').css({
            "opacity": "0%",
        });
    }
});



// FORWARD BUTTON

// $('video').each (function i, el) {
//    var p = $(el).parent();
    

//}


// REWIND BUTTON


// slick slider

$(document).ready(function() {
$('.slickwrap').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
  });
});