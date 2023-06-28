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
        fetch('https://raw.githubusercontent.com/deimerhdz/portafolio/master/data/skill.json')
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
    function loadHobbies(){
        let template = ``;
        fetch('https://raw.githubusercontent.com/deimerhdz/portafolio/master/data/hobbies.json')
        .then(data=>data.json())
        .then(({hobbies})=>{
            hobbies.forEach(hobbie => {
                template += `
                <div class="skill__item">
                <iconify-icon  class="skill__icon" icon="${hobbie.icon}"></iconify-icon>
                <h3 class="skill__titulo">${hobbie.name}</h3>
                </div>
                `
            });
            $('#pasatiempo-content').html(template)
        })
    }

    function showTecnologies(tecnologies,classes){
        let template=``;
       
        tecnologies.forEach((tecnology,i)=>{
            template+=`<p class="${classes[i]}">${tecnology}</p>`
        })
        return template;
    }
    function loadProject(){
        let template = ``;
        fetch('https://raw.githubusercontent.com/deimerhdz/portafolio/master/data/projects.json')
        .then(data=>data.json())
        .then(({projects})=>{
            projects.forEach((project,i) => {
                if(i%2 == 0){
                    template += `
                    <div class="proyecto__item proyecto__item--reverse mb-2">
                    <img class="proyecto__item__imagen" src="${project.img}" alt="${project.title}"/>
                    <div class="proyecto__item__descripcion">
                        <h3 class="titulo">${project.title}</h3>
                        <p class="proyecto__item__info">${project.description}</p>
                        <div class="proyecto__item__tecnologies" >
                            ${ showTecnologies(project.tecnologies,project.class)}
                        </div>
                        <div class="proyecto__cta">
                            <a href="${project.repository}" target="_blank" class="boton boton--secondary">Repositorio</a>
                            <a href="${project.demo}" target="_blank" class="boton boton--primary">Ver demo</a>
                        </div>
                    </div>
                </div>
                    `
                }else{
                    template += `
                    <div class="proyecto__item mb-2">
                    <img class="proyecto__item__imagen" src="${project.img}" alt="${project.title}"/>
                    <div class="proyecto__item__descripcion">
                        <h3 class="titulo">${project.title}</h3>
                        <p class="proyecto__item__info">${project.description}</p>
                        <div class="proyecto__item__tecnologies" >
                            ${ showTecnologies(project.tecnologies,project.class)}
                        </div>
                        <div class="proyecto__cta">
                            <a href="${project.repository}" target="_blank" class="boton boton--secondary">Repositorio</a>
                            <a href="${project.demo}" target="_blank" class="boton boton--primary">Ver demo</a>
                        </div>
                    </div>
                </div>
                    `
                }
                
            });
            $('#proyecto-content').html(template)
        })
    }
    loadSkill();
    loadProject();
    loadHobbies();
})