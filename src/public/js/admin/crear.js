let formulario = document.getElementById("formularioCrear");
let url = "http://localhost:3500";

formulario.addEventListener("submit", async (event) => {
    event.preventDefault(); 

    let formData = new FormData(event.target) 

    let data = Object.fromEntries(formData.entries()); 

    try{ /// envio de datos al backend
        let response = await fetch(`${url}/api/productos`, { 
            
            method: "POST", /// metodo
            headers: { //cabeceras
                "Content-type" : "application/json", 
            },
            body: JSON.stringify(data) 
        });

        if(!response.ok) { 
            console.log(response); 

            let result = await response.json(); 
            console.log(result); 
            alert(result.message) 
        }
        alert("¡Producto creado con exito!")
    }catch(error) { 
        console.error("Error al cargar los datos:", error);
        alert("Error al procesar la solicitud")
    }

});