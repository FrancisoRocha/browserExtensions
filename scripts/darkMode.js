//* DARK MODE 

export const btnMode = document.querySelector('.btn__mode')

btnMode.addEventListener('click', () => {
    // console.log('click')

    // CAMBIO DEL BACKGROUND BODY
    const bodyDark = document.body;
    bodyDark.classList.toggle('dark');
    
    // CAMBIO DE HEADER
    const header = document.querySelector('.header')
    if(header){
        const isDark = document.body.classList.contains('dark');
        header.classList.toggle('dark', isDark);
        header.classList.toggle('ligth', !isDark);
    }

    // LOGO
    const logo = document.querySelector('.icon')
    if(logo){
        const isDark = document.body.classList.contains('dark');
        logo.src = isDark
        ? './assets/images/logo-ligth.svg'
        : './assets/images/logo.svg'
    }
    
    // BUTTON TOGGLE
    const btnToggle = document.querySelector('.btn__mode')
    if(btnToggle){
        const isDark = document.body.classList.contains('dark');
        btnToggle.classList.toggle('dark', isDark)
        btnToggle.classList.toggle('ligth', !isDark)
    }
    
    // ICON TOGGLE
    const iconToggle = document.querySelector('.icon-theme');
    if(iconToggle){
        const isDark = document.body.classList.contains('dark');
        iconToggle.src = isDark
        ? './assets/images/icon-sun.svg'
        : './assets/images/icon-moon.svg'
    }
    
    // TITLE
    const title = document.querySelector('.filter__title');
    if(title){
        const isDark = document.body.classList.contains('dark');
        title.classList.toggle('dark', isDark)
        title.classList.toggle('ligth', !isDark)
    }
    
    // BUTTONS FILTERS
    const btnFilters = document.querySelectorAll('.btn__filter');
    if(btnFilters){
        const isDark = document.body.classList.contains('dark');
        btnFilters.forEach(btns => {
            btns.classList.toggle('dark', isDark);
            btns.classList.toggle('ligth', !isDark);
        });
    }
    
    //CARDS
    const cards = document.querySelectorAll('.cards')
    if(cards){
        const isDark = document.body.classList.contains('dark');
        cards.forEach(card => {
            card.classList.toggle('dark', isDark);
            card.classList.toggle('ligth', !isDark);
        })
    }
    
    // TITLE CARD
    const titleCard = document.querySelectorAll('.title__card');
    if(titleCard){
        const isDark = document.body.classList.contains('dark');
        titleCard.forEach(title => {
            title.classList.toggle('dark', isDark);
            title.classList.toggle('ligth', !isDark);
        })
    }
    
    // TEXT CARD
    const textCard = document.querySelectorAll('.text__card');
    if(titleCard){
        const isDark = document.body.classList.contains('dark');
        textCard.forEach(text => {
            text.classList.toggle('dark', isDark);
            text.classList.toggle('ligth', !isDark);
        })
    }
    
    // BUTTON REMOVE
    const buttonRemove = document.querySelectorAll('.btn__remove');
    if(buttonRemove){
        const isDark = document.body.classList.contains('dark');
        buttonRemove.forEach(remove => {
            remove.classList.toggle('dark', isDark);
            remove.classList.toggle('ligth', !isDark);
        })
    }

    

})




