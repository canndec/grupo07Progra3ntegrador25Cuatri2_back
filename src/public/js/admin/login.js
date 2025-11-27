// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  SOLO ESTA LA VISTA EN PAUSA, NO FUNCIONA 
// TIENE LA MISMA VALIDACION QUE LOGIN DE CLIENTE PORQ FALTA LO DE LA ULTIMA CLASE, Y LA CONTRASEÑA E EMAIL Y ESO
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let formulario = document.getElementById("formIngreso"); //del login el nombre
let inputEmail = document.getElementById("inputEmail"); //email ingresado
let inputContrasenia = document.getElementById("inputContrasenia"); //contra ingresada
let botonCliente = document.getElementById("botonCliente"); //redioreccionar a cliente


formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    location.href = "/productosAdmin";
});

botonCliente.addEventListener("click", function() {;
    location.href = "/";
});
/*
function validarCaracteresInput(nombreIngresado){
    let patron = /^[A-Z]+$/i; //que debe tener
    return patron.test(nombreIngresado); //devuelve boolean
}
function validarTamañoInput(nombreIngresado){
    return nombreIngresado.length >= 3 && nombreIngresado.length <= 20;
}*/
