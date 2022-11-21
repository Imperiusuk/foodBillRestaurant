"use strict"

//прокрутка сайта при клике на пункты меню к конкертному разделу

const menuLinks = document.querySelectorAll('.header-top__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach( menuLink => {
        menuLink.addEventListener( "click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target; 
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header-top').offsetHeight;
        
            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth',
            });

            //отключение работы ссылки, чтобы не переходила на др страницу а прокручивала к контенту
        
            e.preventDefault();

        }
    }
}