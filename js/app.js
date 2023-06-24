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

    function loadSkill(){
        let template = ``;
        fetch('/data/skill.json')
        .then(data=>data.json())
        .then(({skills})=>{
           
            skills.forEach(skill => {
                template += `
                <div class="skill__item">
                <iconify-icon  class="skill__icon" icon="${skill.icon}"></iconify-icon>
                <h3 class="skill__titulo">${skill.name}</h3>
                </div>
                `
            });
            $('#skills-content').html(template)
        })
    }
    loadSkill()
})