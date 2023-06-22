$(document).ready(()=>{
    let links = $(".nav__link");
    for(let link of links){
        $(link).click(()=>{
            $("#nav-check").prop("checked", false)
        })
    }
    var $cabecera = $('#nav');
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