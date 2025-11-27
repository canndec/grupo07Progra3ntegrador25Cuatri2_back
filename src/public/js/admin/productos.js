let gridProductos = document.getElementById("gridProductos"); //contenedor de todos los productos
let url = "http://localhost:3500";
let productos = [];
let productosMostrados = []; /// Nuestro productos se rompe con los botones de navegacion, creando esta variable globa, siempre va a tener considearcion por los filtros a la hora de renderizar


let botonMenuDesplegable = document.getElementById("tituloPrincipal"); //para desplegar el menu
let desplegableGestion = document.getElementById("desplegableBotonesGestion"); //conteiene los botones
let flechaMenu = document.getElementById("flechaMenu");

botonMenuDesplegable.addEventListener("click", function () {
    let estaOculto = desplegableGestion.classList.toggle("oculto");

    flechaMenu.src = estaOculto ? "img/flechaAbajo.png" : "img/flechaArriba.png"; 
    //solo cambiarle la imagen  cuando el deslegable esta oculto osea no se clickeo por primera vez
});

// REDIRECCIONES A PARTIR DEL MENU DESPLEGABLE
function crearProducto(){
    alert("redireccion a creaciond e producto");
    location.href = "/crearAdmin";
}
function modificarProducto(){
    alert("redireccion a modificacion de producto");
    location.href = "/modificarAdmin";
}
function eliminarProducto(){
    alert("redireccion a eliminar un producto");
    location.href = "/eliminarAdmin";
}


// FUNCION OBTENER LOS PRODUCTOS PARA QUE FUNCIONE TODO 
async function obtenerProductos(){
    try{
        let response = await fetch(`${url}/api/productos`);
        console.log(`Solicitud fetch GET a ${url}/api/productos`);

        let data = await response.json();
        productos = data.payload;
        console.log(productos);

        mostrarProductos(productos);
    }catch(error){
        console.error(`Error obteniendo productos ${error}`);
    }
}


// BOTON DE FILTRO DE PRODUCTOS - consolas y juegos
let botonParaConsolas = document.getElementById("botonConsolas");
botonParaConsolas.addEventListener("click", function(){
    let consolas = productos.filter(p => p.categoria === "consola"); ////LE SAQUE LA S SINO NO ME FUNCIONABA EN MI BD TENGO CONSOLA NO CONSOLAS
    posicion = 0;            // <<< lo cambie para reiniciar paginación al filtrar
    mostrarProductos(consolas);
});

let botonParaJuegos = document.getElementById("botonJuegos");
botonParaJuegos.addEventListener("click", function(){
    let juegos = productos.filter(p => p.categoria === "juego"); ////LE SAQUE LA S SINO NO ME FUNCIONABA EN MI BD TENGO JUEGO NO JUEGOS
    posicion = 0;            // <<< lo cambie para reiniciar paginación al filtrar
    mostrarProductos(juegos);
});

let botonTodosProd = document.getElementById("botonTodo")
botonTodosProd.addEventListener("click", function(){
    posicion = 0;            // <<< lo cambie para reiniciar paginación al filtrar
    mostrarProductos(productos);
})

//INPUT CONSULTAR POR ID
let inputConsultaID = document.getElementById("inputConsulta");
inputConsultaID.addEventListener("keyup",  function(){
    let idIngresado = inputConsultaID.value;
    
    let productoCoincidente = productos.find( p => p.id == idIngresado); //filtra los que incluyan los valores
    console.log("id ingresado; ", idIngresado)
    console.table(productoCoincidente);

    if(!productoCoincidente) {
        console.log("no hay productos con ese id")
    }
    //mostrarProductos(idCoincidente)
    mostrarProducto(productoCoincidente);
});

function mostrarProducto(productoCoincidente) {
    let htmlProductos = "";
    htmlProductos = ` 
    <div class="cartaProducto">
            <img class="productoImagen"src="${productoCoincidente.imagen}" alt="${productoCoincidente.nombre}">
            <h3>${productoCoincidente.nombre}</h3>
            <p>$${productoCoincidente.precio}</p>
            <p> id: ${productoCoincidente.id}</p>  
        </div>
    `;
    gridProductos.innerHTML = htmlProductos !== "" ? htmlProductos : `<p>No se encontraron productos</p>`;
}

function mostrarError(message) {
    listaProductos.innerHTML = `
        <li class="mensaje-error">
            <p>
                <strong>Error:</strong>
                <span>${message}</span>
            </p>
        </li>
    `;
}

// funciones generales de la vista
///paginacion

let posicion = 0; //de donde empieza que despues va a incrementar cuando se seleccione la flechita
let limiteAMostrar = 4; //limite de productos a mostrar para paginacion
let arrayActual = productos;

function mostrarProductos(array){
    arrayActual = array;  // cada vez que se llama a mostrar productos, actualiza el array actual

    let limiteProductos = array.slice(posicion, posicion + limiteAMostrar); // basicamente corta desde la posicion hasta el limite a mostrar

    let htmlProductos = limiteProductos.map( p =>`
        <div class="cartaProducto">
            <img class="productoImagen"src="${p.imagen}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p>$${p.precio}</p>
            <p onclick = cambiarVista()> hay stock</p>  
        </div>`).join(""); 
        console.log(htmlProductos);
        //aca solo muestra los productos hasta "limite" puesto
    gridProductos.innerHTML = htmlProductos !== "" ? htmlProductos : `<p>No se encontraron productos</p>`;
}
function cambiarVista() {
    return 
}


//esto es para la paginacion
let botonAtras = document.getElementById("botonAtras");
let botonSiguiente = document.getElementById("botonSiguiente");

//////////////////////////////////
botonAtras.addEventListener("click",function(){
    if (posicion >= limiteAMostrar) {
        posicion -= limiteAMostrar;
        mostrarProductos(arrayActual);   ///lo cambie para que tome en cuenta los filtros

    }
});

botonSiguiente.addEventListener("click", function() {
    if (posicion + limiteAMostrar < arrayActual.length) {
        posicion += limiteAMostrar;
        mostrarProductos(arrayActual);  //lo cambie para que tome en cuenta los filtros
    }
});


function init(){
    obtenerProductos();
}
document.addEventListener("DOMContentLoaded", init); ///

/*
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());
    let idProducto = data.idProducto; //valor que se ingreso guardado

    console.log(`Realizando una peticion GET a la url ${url}/api/productosAdmin/${idProducto}`);
    let response = await fetch(`${url}/api/productosAdmin/${idProducto}`);
    let datos = await response.json();

    if(response.ok){
        let producto = datos.payload[0]; // Extraemos de la respuesta payload, el primer resultado que contiene el objeto que consultamos
        mostrarProductos(producto);
    } else {
        console.log(datos);
        console.log(datos.message);
        mostrarError(datos.message);
    }
*/