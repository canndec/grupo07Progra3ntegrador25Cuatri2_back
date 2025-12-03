
let inputEmail = document.getElementById("inputEmail"); //email ingresado
let inputContrasenia = document.getElementById("inputContrasenia"); //contra ingresada
let accesoRapido = document.getElementById("botonAccesoRapido");

accesoRapido.addEventListener("click", () => {
    inputEmail.value = "test@test1.com";
    inputContrasenia.value = "test1" //este ya esta encriptado
});

// MOSTRAR CONTRASEÑA LUJITO
let iconoOjo = document.getElementById("iconoOjo");
iconoOjo.addEventListener("click", () => {
    if (inputContrasenia.type === "password") {
        inputContrasenia.type = "text";
        iconoOjo.src = "img/ojo.png"; 
    } else {
        inputContrasenia.type = "password";
        iconoOjo.src = "img/ojoCerrado.png"; 
    }
});