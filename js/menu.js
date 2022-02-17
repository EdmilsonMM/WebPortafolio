const header = document.querySelector('.header')
const menu = document.querySelector('.ico__menu')

menu.addEventListener('click',()=>{
    header.classList.toggle('menu__active')
})