// controladores producto

import ProductModels from "../models/product.models.js";

//cuando se importe va a ser reutilziable para las vistas 
export const productsView = async (req,res) =>{
    try {
        const [rows] = await ProductModels.seleccionarTodosProductos();
        res.render("index", {
            titulo: "inicio",
            sobre: "listado principal",
            productos: rows
        });
    } catch(error) {
        console.error(error);
    }
}