
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

//

const fomr = document.getElementById('form').addEventListener('submit', guardar)

function guardar(e){
    e.preventDefault();
    
    let titulo = document.getElementById('name').value;
   //let img = document.getElementById('img').value;
   let tel = document.getElementById('tel').value;
   let email = document.getElementById('email').value;
   let pais = document.getElementById('pais').value;
   let comentario = document.getElementById('comentario').value;
  


    const item ={
        name,
        tel,
        email,
        pais,
        comentario
    }
  
    let items =[]

    items.push(item)

    console.log(items)
   

   
}

function leer(){

    const contenido = document.getElementById('contenido');

    contenido.innerHTML='';
   

}

leer();


