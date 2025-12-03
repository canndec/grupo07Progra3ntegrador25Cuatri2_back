let gridProductos = document.getElementById("gridProductos"); //contenedor de todos los productos
let url = "http://localhost:3500";
let productos = [];
let productosMostrados = []; /// Nuestro productos se rompe con los botones de navegacion, creando esta variable globa, siempre va a tener considearcion por los filtros a la hora de renderizar






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
            <p>Id: ${p.id}</p>
            <p>$${p.precio}</p>
            <p> ${hayStock(p.activo)}</p> 
        </div>`).join(""); 
        //aca solo muestra los productos hasta "limite" puesto
    gridProductos.innerHTML = htmlProductos !== "" ? htmlProductos : `<p>No se encontraron productos</p>`;
}

function hayStock(activo){
    return activo == 1 ? `Disponible` : `No hay stock`;
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

function imprimirExcelVentas() {
    window.open(`${url}/api/ventas/exportar-excel`, '_blank'); 
    alert("Iniciando descarga del reporte de ventas...");
}
function init(){
    obtenerProductos();
}
document.addEventListener("DOMContentLoaded", init); ///
