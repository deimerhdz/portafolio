$(document).ready(()=>{
    $('#menu').click(function(){
        $( '#menu-options' ).toggleClass( "show" );
    })

    var $cabecera = $('#nav');
    // var $logo = $('#logo');
    var previousScroll = 0;
    $(window).scroll(function(event){
       var scroll = $(this).scrollTop();
       if (scroll > 76){
        //    $logo.addClass('logoOnOff');
           $cabecera.addClass('bgcolor');
       } else {
        //   $logo.removeClass('logoOnOff');
           $cabecera.removeClass('bgcolor');
       }
       previousScroll = scroll;    });
})