// controladores producto

import ProductModels from "../models/product.models.js";

//cuando se importe va a ser reutilziable para las vistas 
export const productsView = async (req,res) =>{
    try {
        const [rows] = await ProductModels.seleccionarTodosProductos();
        res.render("loginCliente", {
            titulo: "inicio",
            sobre: "Bienvenido",
            css : "/cliente/login.css",
            productos: rows
        });
    } catch(error) {
        console.error(error);
    }
}

// se usa como principal el login de cliente y de ahi se redirecciona y todo funciona clean