"use strict"
//-----------Меню-бургер------------//

const menuBurger = document.querySelector('.menu-burger');

//проверка есть ли такой класс вообще

if (menuBurger) {
    const headerMenu = document.querySelector('.header-top__menu');
    const headerTop = document.querySelector('.header-top');

    //создание события по клику

    menuBurger.addEventListener("click", function(e) {
       //запрет скроллить страницу при просмотре меню
       document.body.classList.toggle('_lock');
       
        //обращение к иконке бургера с подключением класса 
        menuBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
        headerTop.classList.toggle('_active');
    
    });
}