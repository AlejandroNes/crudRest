//importaciones
import { validar, mostrarAlerta } from './funciones.js';
import { mostrarObjeto } from './API.js';
//nuevo cliente
(function(){
    //variables
    const formulario = document.querySelector('#formulario')
    //eventos
    formulario.addEventListener('submit', validarForm);

    //funciones
    function validarForm(e){
    e.preventDefault();
    //llamando los inputs del formulario
    const nombre  = document.querySelector('#nombre').value
    const email  = document.querySelector('#email').value
    const telefono  = document.querySelector('#telefono').value
    const empresa  = document.querySelector('#empresa').value

    //creamos un objeto 
    const cliente = {
        nombre,
        email,
        telefono,
        empresa
    } 
    // validando formulario
        if(validar(cliente)){
            mostrarAlerta('LLene todos los campos del formulario')
            return
        }
        //agregar datos al servidor
        mostrarObjeto(cliente);
    }
})()