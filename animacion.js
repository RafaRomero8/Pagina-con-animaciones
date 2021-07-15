const button1 = document.querySelector('#button1')//es decirle al html(renderizado) para que trabaje con el id que le pusimos en la etiqueta
const modal = document.querySelector('.modal')//tambien se le puede poner una clase en ves de un id
const close = document.querySelector('.modal-content__close')//para cerra el recuadro del  del modal

button1.addEventListener('click',() =>{//se le agrega el evento click(cunado le de click el usuario) y una arrow function 
    //cuando accedemos al button1(o boton) estamos quitandole y agregandole unas clases a nuestro modal para que se vea y no se vea
        modal.classList.remove('hidden')//agregar modal y remove  la clase hidden
        modal.classList.add('visible')//y posteriormente colocar la clase visible
    })
    close.addEventListener('click',()=>{
        console.log("here")
        modal.classList.add('hidden')
        modal.classList.remove('visible')
    })
    
    const button2 = document.querySelector('#button2')//es decirle al html(renderizado) para que trabaje con el id que le pusimos en la etiqueta
    
    button2.addEventListener('click',() =>{//se le agrega el evento click(cunado le de click el usuario) y una arrow function 
    //cuando accedemos al button1(o boton) estamos quitandole y agregandole unas clases a nuestro modal para que se vea y no se vea
        modal.classList.remove('hidden')//agregar modal y remove  la clase hidden
        modal.classList.add('visible')//y posteriormente colocar la clase visible
    })
    const button3 = document.querySelector('#button3')//es decirle al html(renderizado) para que trabaje con el id que le pusimos en la etiqueta
    
    button3.addEventListener('click',() =>{//se le agrega el evento click(cunado le de click el usuario) y una arrow function 
    //cuando accedemos al button1(o boton) estamos quitandole y agregandole unas clases a nuestro modal para que se vea y no se vea
        modal.classList.remove('hidden')//agregar modal y remove  la clase hidden
        modal.classList.add('visible')//y posteriormente colocar la clase visible
    })

