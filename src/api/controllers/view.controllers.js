// controladores producto
import ProductModels from "../models/product.models.js";

//cuando se importe va a ser reutilziable para las vistas 

export const productosAdminView = async (req,res) =>{
    try {
        const [rows] = await ProductModels.seleccionarTodosProductos();
        res.render("productosAdmin", {
            titulo: "Listado De Productos",
            sobre: "todos los productos",
            css : "admin/productos.css",
        }); 
        //con products puedo acceder <%= productos.foreach %> para recorrer y agarrar ej: productos.id
    } catch(error) {
        console.error(error);
    }
}


export const crearProductoView = async (req,res) => {
    try{
        res.render("crearAdmin", {
            titulo: "Crear",
            sobre: "crear producto",
            css: "admin/crear.css"
        });
    } catch (error) {
        console.error("Error al cargar la vista para crear un producto:", error);
        res.status(500).send("Error interno del servidor al cargar la vista.");
    }
}
export const consultarAdminView = async (req,res) => {
    try{
        res.render("consultarAdmin", {
        titulo: "Consultar",
        sobre: "consultar producto por id",
        css: "admin/consultar.css"
        });
    }catch (error) {
        console.error("Error al cargar la vista para consultar un producto:", error);
        res.status(500).send("Error interno del servidor al cargar la vista.");
    }
}

export const modificarAdminView = async (req,res) => {
    try{
        res.render("modificarAdmin", {
            titulo: "Modificar",
            sobre: "Modificar/actualizar un producto",
            css:"admin/modificar.css"
        });
    }catch (error) {
        console.error("Error al cargar la vista para modificar un producto:", error);
        res.status(500).send("Error interno del servidor al cargar la vista.");
    }
}
export const eliminarAdminView = async (req,res) => {
    try {
        res.render("eliminarAdmin", {
            titulo: "eliminar",
            sobre: "eliminar un producto",
            css: "admin/eliminar.css"
        });
    }catch (error) {
        console.error("Error al cargar la vista para eliminar un producto:", error);
        res.status(500).send("Error interno del servidor al cargar la vista.");
    }
}

// >>>>>>>>>>>>>>>>>>>>>>

