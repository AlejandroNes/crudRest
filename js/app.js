//importaciones
import { mostrarDatos, eliminarDatos } from "./API.js";
//archivo principal
(function () {
  //variables
  const listadoClientes = document.querySelector("#listado-clientes");

  //eventos
  document.addEventListener("DOMContentLoaded", mostrarClientes);
  listadoClientes.addEventListener('click', eliminar);
  //funciones
  async function mostrarClientes() {
    const datos = await mostrarDatos();
    datos.forEach((item) => {
      //desestructurando el arreglo
      const { nombre, email, telefono, empresa, id } = item;

      //creando la tabla
      const row = document.createElement("tr");
      row.innerHTML += /*html*/ `
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
            <p class="text-sm leading-10 text-gray-700"> ${email} </p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
            <p class="text-gray-700">${telefono}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
            <p class="text-gray-600">${empresa}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
            <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
            <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
    </td>
            `;
     //insertando al tbody
     listadoClientes.appendChild(row)       
    });
  }
  //eliminar cliente
  function eliminar(e){
    if(e.target.classList.contains('eliminar')){
        const clienteID = parseInt(e.target.dataset.cliente)
        const confirmar = confirm('Desea eliminar?..')
       if(confirmar){
           eliminarDatos(clienteID)
       }
    }
}
})();


