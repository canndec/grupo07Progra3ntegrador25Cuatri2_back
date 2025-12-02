
let formulario = document.getElementById("formIngreso"); //del login el nombre
let inputEmail = document.getElementById("inputEmail"); //email ingresado
let inputContrasenia = document.getElementById("inputContrasenia"); //contra ingresada
let accesoRapido = document.getElementById("botonAccesoRapido");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    location.href = "/productosAdmin";
});

accesoRapido.addEventListener("click", () => {
    inputEmail.value = "test@test.com";
    inputContrasenia.value = "test123"
})

