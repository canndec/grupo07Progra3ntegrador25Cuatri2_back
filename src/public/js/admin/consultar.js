let gridProductos = document.getElementById("gridProductos"); //contenedor de todos los productos

let formulario = document.getElementById("formularioConsultar");
let url = "http://localhost:3500";

formulario.addEventListener("submit", async (event) => {
    console.log("fomrularrrio");
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());
    let idProd = data.idProd; //campo del formulario en esta variable
    console.log(`Realizando una peticion GET a la url ${url}/api/productos/${idProd}`);

    let response = await fetch(`${url}/api/productos/${idProd}`);
    let datos = await response.json();

    if(response.ok) {
        let producto = datos.payload[0];
        mostrarProducto(producto,gridProductos);
    }else{
        console.log(datos);
        //alert(datos.message);
        mostrarError(datos.message,gridProductos); 
    }

});
/*
function mostrarProducto(productoCoincidente, datos) {
    let htmlProductos = "";
    htmlProductos = ` 
    <div class="cartaUnProducto">
            <img class="productoImagen"src="${productoCoincidente.imagen}" alt="${productoCoincidente.nombre}">
            <h3>${productoCoincidente.nombre}</h3>
            <p>$${productoCoincidente.precio}</p>
            <p> id: ${productoCoincidente.id}</p>  
            <p> ${hayStock(productoCoincidente.activo)}</p>
        </div>
    `;
    gridProductos.innerHTML = htmlProductos;
}
function hayStock(activo){
    return activo == 1 ? `Disponible` : `No hay stock`;
}

function mostrarError(mensaje) {
    gridProductos.innerHTML = `
        <div class="mensajeError">
            <strong>Error:</strong>
            <span>${mensaje}</span>
        </div>`;
}*/