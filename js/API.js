
//peticiones a la base de datos

//url de la base de datos
const url = "http://localhost:4000/clientes";
//actualizar la db 'POST'
export const  mostrarObjeto = async (cliente) => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html';
    } catch (error) {
       console.log(error) 
    }
}

//obteniendo todos los clientes
export const mostrarDatos = async () => {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

//eliminando los datos del cliente seleccionado
export const eliminarDatos = async id  => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        
    }
}

// obteniendo el cliente
export const obtenerCliente = async (id) => {
    try {
        const resp = await fetch(`${url}/${id}`)
        const data = resp.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

//editar el cliente
export const editarDatos = async (cliente) => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html'

    } catch (error) {
        console.log(error)
    }
}