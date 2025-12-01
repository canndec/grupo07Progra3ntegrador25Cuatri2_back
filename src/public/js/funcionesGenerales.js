function mostrarProducto(productoCoincidente,gridProductos) {
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

function mostrarError(mensaje, gridProductos) {
    gridProductos.innerHTML = `
        <div class="mensajeError">
            <strong>Error:</strong>
            <span>${mensaje}</span>
        </div>`;
}