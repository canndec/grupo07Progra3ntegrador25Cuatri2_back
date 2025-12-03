let formulario = document.getElementById("formAltaAdmin");
let url = "http://localhost:3500";
const inputPassAdmin = document.getElementById('inputContraseniaAdmin');
const ojoAdmin = document.getElementById('ojoContraseniaAdmin');

ojoAdmin.addEventListener('click', () => {
    if (inputPassAdmin.type === "password") {
        inputPassAdmin.type = "text";
        
        ojoAdmin.src = "img/ojo.png"; 
    } else {
        inputPassAdmin.type = "password";
        
        ojoAdmin.src = "img/ojoCerrado.png";
    }
});

formulario.addEventListener("submit", async event => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());

    try{
        let response = await fetch(`${url}/api/usuarios`,{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)
        });

        if(response.ok){
            console.log(response);
            let resultado = await response.json();
            console.log(resultado);
            alert(resultado.message);
        }

    } catch(error) {
        console.log("Error al enviar los datos", error);
        alert("Error al procesar la solicitud");
    }
});