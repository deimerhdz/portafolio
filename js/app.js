$(document).ready(()=>{

   
    var $cabecera = $('#nav');
    // var $logo = $('#logo');
    var previousScroll = 0;
   
    $(window).scroll(function(event){
       var scroll = $(this).scrollTop();
       if (scroll > 70){
        //    $logo.addClass('logoOnOff');
           $cabecera.addClass('border');
       } else {
        //   $logo.removeClass('logoOnOff');
           $cabecera.removeClass('border');
       }
    
       previousScroll = scroll;    
    });

    const flags = $('#flags li');
    let textsToChange = $('[data-section]');
    const selectedLang = $("#selected_lang");
    flags.click((e)=>{
        const lang =e.target.parentElement.dataset.language;
        const selectedLang = $("#selected_lang");
        if(lang=='es'){
            selectedLang.text("Spanish");
            selectedLang.removeClass('en')
            selectedLang.addClass('es')
        }else{
            selectedLang.text("English");
            selectedLang.removeClass('es')
            selectedLang.addClass('en')

        }
        changeLanguage(lang);
    })
    
    const changeLanguage = async language =>{
        const requestJson = await fetch(`./languages/${language}.json`);
        const texts = await requestJson.json();
        for(let textToChange of textsToChange){
            const section = textToChange.dataset.section;
            const value = textToChange.dataset.value;
            $(textToChange).text(texts[section][value]);
        }
     
    }
    changeLanguage('es');
    selectedLang.text("Spanish");
    selectedLang.addClass('es')
})