let botonMenuDesplegable = document.getElementById("tituloPrincipal"); //para desplegar el menu
let desplegableGestion = document.getElementById("desplegableBotonesGestion"); //conteiene los botones
let flechaMenu = document.getElementById("flechaMenu");

botonMenuDesplegable.addEventListener("click", function () {
    let estaOculto = desplegableGestion.classList.toggle("oculto");

    flechaMenu.src = estaOculto ? "img/flechaAbajo.png" : "img/flechaArriba.png"; 
    //solo cambiarle la imagen  cuando el deslegable esta oculto osea no se clickeo por primera vez
});


// REDIRECCIONES A PARTIR DEL MENU DESPLEGABLE
function consultarProducto(){
    /*alert("Redireccionando para consultar productos por id");*/
    location.href = "/consultarAdmin";
}
function crearProducto(){
    /*alert("redireccion a creaciond e producto");*/
    location.href = "/crearAdmin";
}
function modificarProducto(){
    /*alert("redireccion a modificacion de producto");*/
    location.href = "/modificarAdmin";
}
function eliminarProducto(){
    /*alert("redireccion a eliminar un producto");*/
    location.href = "/eliminarAdmin";
}
function pantallaPrincipal(){
    location.href = "/productosAdmin";
}
function crearUsuarioAdmin(){
    location.href = "/crearUsuarioAdmin";
}