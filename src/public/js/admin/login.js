
let inputEmail = document.getElementById("inputEmail"); //email ingresado
let inputContrasenia = document.getElementById("inputContrasenia"); //contra ingresada
let accesoRapido = document.getElementById("botonAccesoRapido");

accesoRapido.addEventListener("click", () => {
    inputEmail.value = "test@test1.com";
    inputContrasenia.value = "test1" //este ya esta encriptado
});

