const btnUno = document.querySelector(".circle1")
const btnDos = document.querySelector(".circle2")

const proyectos1= document.querySelector(".proyectos")

const proyectos2= document.querySelector(".dos")

    btnDos.addEventListener("click",()=>{
        proyectos1.style.cssText = 'display : none';
        proyectos2.style.cssText = 'display : block';
    })

    btnUno.addEventListener("click",()=>{
        proyectos1.style.cssText = 'display : grid';
        proyectos2.style.cssText = 'display : none';
    })