//importaciones
import { obtenerCliente, editarDatos } from './API.js';
import { validar, mostrarAlerta } from './funciones.js';

(function(){
//variables
//valores de los inputs
const nombreInput = document.querySelector('#nombre')
const emailInput = document.querySelector('#email')
const telefonoInput = document.querySelector('#telefono')
const empresaInput = document.querySelector('#empresa')
const idInput = document.querySelector('#id')
//eventos
document.addEventListener('DOMContentLoaded', async ()=> {
    //validar formulario
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarForm);

    //obteniendo el id cliente
    const parametrosURL = new URLSearchParams(window.location.search);
    const clienteID = parseInt(parametrosURL.get("id"));
    const cliente = await obtenerCliente(clienteID);
    mostrarCamposCliente(cliente)

    
    //funcion
    function mostrarCamposCliente(cliente){
    //desesctructuracion del cliente
    const { nombre, email, telefono, empresa, id } = cliente
    nombreInput.value = nombre
    emailInput.value = email
    telefonoInput.value = telefono
    empresaInput.value = empresa
    idInput.value = id
    }  

});

//validar Formempresa
function validarForm(e){
    e.preventDefault();
    const cliente = {
        nombre: nombreInput.value,
        email: emailInput.value,
        telefono: telefonoInput.value,
        empresa: empresaInput.value,
        id: idInput.value,
    }
    
    if(validar(cliente)){
        mostrarAlerta('Completa los campos del formulario');
        return
    }
    editarDatos(cliente);
    
    
}


})()