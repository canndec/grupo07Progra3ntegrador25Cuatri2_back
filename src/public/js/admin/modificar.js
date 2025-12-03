let formulario = document.getElementById("formularioModificar");
let gridProductos = document.getElementById("gridProductos");
let conteinerProductoActualizado = document.getElementById("productoActualizado");
let url = "http://localhost:3500";

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());
    let idProd = data.productoId;

    console.log(`Realizando una peticion GET a la url ${url}/api/products/${idProd}`);
    let response = await fetch(`${url}/api/productos/${idProd}`);
    let datos = await response.json();

    if(!response.ok) {
        console.log(datos);
        //alert(datos.message);
        mostrarError(datos.message,gridProductos); 
    }

    let producto = datos.payload[0];
    mostrarProducto(producto,gridProductos); //esta en funcionesGenerales.js
    gridProductos.innerHTML += `<input type="button" id="botonActualizarProducto" value="Actualizar producto"></input>`;

    let botonActualizar = document.getElementById("botonActualizarProducto");
    botonActualizar.addEventListener("click", event => {
        event.stopPropagation();
        crearFormularioParaActualizar(producto);
    });
})

async function crearFormularioParaActualizar(producto){
    console.table(producto);
    gridProductos.innerHTML = ""; //para vaciar sino se superpone todo y repite codigo
    let formHTML = `
    <form id="formularioModificarActualizado">
            <input type="hidden" name="id" value="${producto.id}">
            <label for="inputNombreProducto">Nombre</label>
            <input id="inputNombreProducto" type="text" name="nombre" value="${producto.nombre}" placeholder="Ingrese el nombre del producto..." required>
            
            <label for="inputPrecioProducto">Precio</label>
            <input id="inputPrecioProducto" type="text" name="precio" value="${producto.precio}" placeholder="Ingrese el precio del producto..." required>
            
            <label for="inputImagenProducto">Imagen</label>
            <input id="inputImagenProducto" type="text" name="imagen" value="${producto.imagen}" placeholder="Ingrese la URL del producto" required>
            
            <label for="inputCategoriaProducto">Categoria</label>
            <select id="inputCategoriaProducto" name="categoria" required>
                <option value="consola" ${producto.categoria === 'consola' ? 'selected' : ''}>Consola</option>
                <option value="juego" ${producto.categoria === 'juego' ? 'selected' : ''}>Juego</option>
            </select>
            
            <label for="inputActivoProducto">Activo</label>
            <select name="activo" id="inputActivoProducto" required>
                <option value="1" ${producto.activo == 1 ? 'selected' : ''}>Si</option>
                <option value="0" ${producto.activo == 0 ? 'selected' : ''}>No</option>
            </select>
            <input class="botonFinal"  type="submit" value="Modificar producto">
        </form>`;
    
        conteinerProductoActualizado.innerHTML = formHTML;
        let formConProductoModificado  = document.getElementById("formularioModificarActualizado");
        formConProductoModificado.addEventListener("submit", event => {
            actualizarProducto(event);
        })
}

async function actualizarProducto(evento) {
    evento.preventDefault();
    evento.stopPropagation();

    console.log("Preparando datos del formulario para el PUT")

    let formData = new FormData(evento.target);
    let data = Object.fromEntries(formData.entries());
    
    try {
        let response = await fetch(`${url}/api/productos`, {
            method: "PUT",
            headers : {"Content-type":"application/json"},
            body: JSON.stringify(data)
        });
        let resultado = await response.json();

        if(response.ok) {
            console.log(resultado.message);
            alert(resultado.message);
        }else {
            console.log(resultado.message);
            mostrarError(resultado.message,gridProductos)
        }
    }catch(error){
        console.error("Error al cargar los datos:", error);
        alert("Error al procesar la solicitud")
    }


}