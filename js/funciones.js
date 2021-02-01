
// alerta de error
export function mostrarAlerta(sms){
    const alerta = document.querySelector('.bg-red-100')
    if(!alerta){
        const alerta = document.createElement('p')
        alerta.classList.add('bg-red-100', 'broder-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded',
        'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = /*html*/`
                <strong class="font-bold">Error!..</strong></br>
                <span class="block sm:inline">${sms}</span>
        `
        const formulario = document.querySelector('#formulario')
        formulario.appendChild(alerta)
        setTimeout( ()=>{
            alerta.remove();
        },2000 )
    }
}
// validar si es true o false
export function validar(obj){
    return !Object.values(obj).every( input => input != '' )
}