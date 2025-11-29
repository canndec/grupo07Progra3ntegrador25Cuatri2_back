let gridProductos = document.getElementById("gridProductos"); //contenedor de todos los productos

let formulario = document.getElementById("formularioConsultar");
let url = "http://localhost:3500";

formulario.addEventListener("submit", async (event) => {
    console.log("fomrularrrio");
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());
    let idProd = data.idProd; //campo del formulario en esta variable
    console.log(`Realizando una peticion GET a la url ${url}/api/products/${idProd}`);

    let response = await fetch(`${url}/api/productos/${idProd}`);
    let datos = await response.json();

    if(response.ok) {
        let producto = datos.payload[0];
        mostrarProducto(producto);
    }else{
        console.log(datos);
        console.log(datos.message);
        mostrarError(datos.message);
    }

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
    gridProductos.innerHTML = `
        <li class="mensaje-error">
            <p>
                <strong>Error:</strong>
                <span>${message}</span>
            </p>
        </li>
    `;
}