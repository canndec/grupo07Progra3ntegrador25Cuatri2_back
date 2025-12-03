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