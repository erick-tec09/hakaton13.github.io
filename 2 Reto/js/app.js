
const add = document.getElementById('btn')
const modal = document.getElementById('modal')
const cerrar = document.getElementById('close')
const aceptar = document.getElementById('aceptar')
add.addEventListener('click',()=>{
    modal.classList.add('active__modal');
   
})
cerrar.addEventListener('click',()=>{
    modal.classList.remove('active__modal');
})
aceptar.addEventListener('click',()=>{

    // modal.classList.remove('');
})



//formulario
class cardDog{
    constructor(nombre, telefono,correo,pais,des){

        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.pais = pais;
        this.des = des;
    }
}

class ui{
    addDog(newDogs){

       const contenido= document.getElementById('contenido')
       const element = document.createElement('div')
       element.innerHTML=`
       <div class="card">
                <div class="card__header">
                    <i class="fas fa-edit card__icon"></i>
                    <i class="fas fa-trash-alt card__icon" name="delete"></i>
                    
                </div>
                <img src="images/dog1.jpg" alt="" class="card__img">
                <p class="card__title">${newDogs.nombre}</p>
                <p class="card__info">${newDogs.telefono}|${newDogs.correo}</p>
                <p class="card__pais">${newDogs.pais}</p>
                <p class="card__desc"> ${newDogs.des}</p>
        </div>
       
       `
       contenido.appendChild(element)
       console.log(element)

    }
    resetForm(){

        document.getElementById('form').reset()
    }

    deleteDog(element){

        if(element.name==='delete')
        console.log(element)
        element.parentElement.parentElement.remove()

    }

    showMesage(){

    }

}
//eventos del DOM

 document.getElementById('form')
    .addEventListener('submit', function(e){
        
    const nombre = document.getElementById('name').value
    const Tele = document.getElementById('tel').value
    const email = document.getElementById('email').value
    const pais = document.getElementById('pais').value
    const Descripcion = document.getElementById('comentario').value
    const newDogs= new cardDog(nombre,Tele,email,pais,Descripcion)

    const UI = new ui()
    UI.addDog(newDogs)



    UI.resetForm()

    e.preventDefault()
});

 document.getElementById('contenido').addEventListener('click', function(e){


     console.log(e.target)
    const UI = new ui()
    UI.deleteDog(e.target)

 })