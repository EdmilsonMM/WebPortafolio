const scroll = document.querySelector('.header')

window.addEventListener('scroll',()=>{
    scroll.classList.toggle('active' , window.scrollY > 100)
})