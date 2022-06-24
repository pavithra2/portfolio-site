const SECTION = document.querySelectorAll('.section');
const SECT_BTNS = document.querySelectorAll('.controls');
const SECT_BTN = document.querySelectorAll('.control');
const ALL_SECTIONS = document.querySelector('.main-content');

function pageTransition(){
    const ACTIVE_BTN = 'active-btn';
    for(let i = 0; i < SECT_BTN.length; i++){
        SECT_BTN[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.'+ ACTIVE_BTN);
            currentBtn[0].className = currentBtn[0].className.replace(ACTIVE_BTN, '');
            this.className += ' '+ ACTIVE_BTN;
        })
    }

    const ACTIVE = 'active';
    ALL_SECTIONS.addEventListener('click', function(e) {
        const ID = e.target.dataset.id;
        if(ID){
            SECT_BTNS.forEach((btn)=>{
                btn.classList.remove(ACTIVE);
            });
            e.target.classList.add(ACTIVE);

            SECTION.forEach((section)=>{
                section.classList.remove(ACTIVE);
            });
            const ele = document.getElementById(ID);
            ele.classList.add(ACTIVE);
        }
    });

    //Toggle theme
    const THEME_BTN = document.querySelector('.theme-btn');
    THEME_BTN.addEventListener('click', ()=>{
        let ele = document.body;
        ele.classList.toggle('light-mode');
    })

}

pageTransition();