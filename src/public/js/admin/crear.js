let formulario = document.getElementById("formularioCrear");
let url = "http://localhost:3500";

formulario.addEventListener("submit", async (event) => {
    event.preventDefault(); //previene envio de formulario temprano

    let formData = new FormData(event.target) //se guarda la info ingresada en el obj nativo formdata

    let data = Object.fromEntries(formData.entries()); //obj form data a onj javaScript normal

    try{
        let response = await fetch(`${url}/api/productos`, {
            method: "POST",
            headers: {
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
    }catch(error) {
        console.error("Error al cargar los datos:", error);
        alert("Error al procesar la solicitud")
    }

});