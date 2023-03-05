'use strict';

const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const burgerMenu = document.querySelectorAll('.item');
const dimLight = document.querySelector('.dim');

openBtn.addEventListener('click', function (){
    closeBtn.classList.remove('hidden');
    openBtn.classList.add('hidden');
    // burgerMenu.classList.remove('hidden');
    burgerMenu.forEach(e =>{
        e.classList.remove('hidden');
    })
    dimLight.classList.remove('hidden');
})

closeBtn.addEventListener('click', function (){
    openBtn.classList.remove('hidden');
    closeBtn.classList.add('hidden');
    burgerMenu.forEach(e =>{
        e.classList.add('hidden');
    })
    dimLight.classList.add('hidden');
})