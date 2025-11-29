let gridProductos = document.getElementById("gridProductos"); //contenedor de todos los productos

let formulario = document.getElementById("formularioEliminar");
let url = "http://localhost:3500";

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());
    console.log(data);
    let idProd = data.idProd;
    console.log(idProd);
    console.log(`Realizando una peticion GET a la url ${url}/api/productos/${idProd}`);
    let response = await fetch(`${url}/api/productos/${idProd}`);
    let datos = await response.json();

    if(!response.ok){ 
        alert(datos.message);
        gridProductos.innerHTML = "";
        return;
    }


    let producto = datos.payload[0];
    mostrarProductoAEliminar(producto);
    let botonEliminarProducto = document.getElementById("botonEliminarProducto");

    botonEliminarProducto.addEventListener("click", event => {
        event.stopPropagation(); // Evitamos la propagacion de eventos
        let confirmacion = confirm("Queres eliminar este producto?");
        if(!confirmacion) {
            alert("Eliminacion cancelada");
        } else {
            eliminarProducto(producto.id);
        }
    })
});

function mostrarProductoAEliminar(producto){
    
    let htmlProducto = `
        <li class="li-producto">
                <img class="producto-img" src="${producto.imagen}" alt="${producto.nombre}">
                <p>Id: ${producto.id} / Nombre: ${producto.nombre} / <strong>Precio: ${producto.precio}</strong></p>
        </li>
        <li class="li-botonera">
            <input type="button" id="botonEliminarProducto" value="Eliminar producto">
        </li>
    `;
    gridProductos.innerHTML = htmlProducto;
};

async function eliminarProducto(id) {
    try {
        let response = await fetch (`${url}/api/productos/${id}`,{
            method: "DELETE"
        });
        let resultado = await response.json();
        if(response.ok){
            alert(resultado.message);
            gridProductos.innerHTML = ""; //para sacar lo q habia
        }else{
            console.error("error:", resultado.message);
            alert("no se pudo eliminar el producto");
        }
    } catch (error){
        console.error("Error en la solicitud de DELETE: ", error);
        alert("ocurrio un error al eliminar el producto")
    }
}