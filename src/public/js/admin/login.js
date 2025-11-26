// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  SOLO ESTA LA VISTA EN PAUSA, NO FUNCIONA 
// TIENE LA MISMA VALIDACION QUE LOGIN DE CLIENTE PORQ FALTA LO DE LA ULTIMA CLASE, Y LA CONTRASEÑA E EMAIL Y ESO
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let formulario = document.getElementById("formIngreso"); //del login el nombre
let inputEmail = document.getElementById("inputEmail"); //email ingresado
let inputContrasenia = document.getElementById("inputContrasenia"); //contra ingresada
let botonCliente = document.getElementById("botonCliente"); //redioreccionar a cliente


formulario.addEventListener("submit", function (event) {
/**
 * 
 * variable patron: // ^: tiene que iniciar con lo que esta [A-Z]. +: puede erepetirse un caracter.
 * $: tiene que finalizar con un caracter del []. i: es lo mismo minuscula o mayuscula
 */

/*if(|| !patron.test(nombreIngresado)) { //test no aplica en string solo sobre regex(por eso lo usa patron)
    event.preventDefault();  //previene el envio por defecto del formulario
    alert("Ingrese un nombre correcto");
    return;
}*/
    /*event.preventDefault();
    console.log("Submit detectado");

    let nombreIngresado = inputNombre.value.trim(); //para eliminar espacios raros, sino los toma como caracter
    if(!validarCaracteresInput(nombreIngresado) || !validarTamañoInput(nombreIngresado)) { //false
        alert("Ingrese un nombre valido");
        return;
    }
    console.log("Guardando nombre:", nombreIngresado);
    localStorage.setItem("nombreDeCliente", nombreIngresado); //guardado en localStorage para usarse despues
    alert("Bienvenido admi", nombreIngresado);*/
    alert("Bienvenido, redireccionado")
    location.href = "/productosAdmin";
});

botonCliente.addEventListener("click", function() {;
    location.href = "/";
});

function validarCaracteresInput(nombreIngresado){
    let patron = /^[A-Z]+$/i; //que debe tener
    return patron.test(nombreIngresado); //devuelve boolean
}
function validarTamañoInput(nombreIngresado){
    return nombreIngresado.length >= 3 && nombreIngresado.length <= 20;
}
