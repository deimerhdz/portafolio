$(document).ready(()=>{

    var buttonMenu = $('#boton-menu');
   
    buttonMenu.click(()=>{
        $('.nav__list').toggleClass('show');
    })
    var $cabecera = $('#nav');
    // var $logo = $('#logo');
    var previousScroll = 0;
   
    $(window).scroll(function(event){
       var scroll = $(this).scrollTop();
       if (scroll > 70){
        
           $cabecera.addClass('bg-secondary');
       } else {
           $cabecera.removeClass('bg-secondary');
       }
    
       previousScroll = scroll;    
    });
})