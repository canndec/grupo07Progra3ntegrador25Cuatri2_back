// controladores producto

import ProductModels from "../models/product.models.js";

//cuando se importe va a ser reutilziable para las vistas 
export const productosAdminView = async (req,res) =>{
    try {
        const [rows] = await ProductModels.seleccionarTodosProductos();
        res.render("productosAdmin", {
            titulo: "Listado De Productos",
            sobre: "Todos los productos",
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
            sobre: "Crear producto",
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
        sobre: "Consultar producto por id",
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
            sobre: "Modificar producto",
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
            sobre: "Eliminar producto",
            css: "admin/eliminar.css"
        });
    }catch (error) {
        console.error("Error al cargar la vista para eliminar un producto:", error);
        res.status(500).send("Error interno del servidor al cargar la vista.");
    }
}
// >>>>>>>>>>>>>>>>>>>>>>

export const productosClienteView = async (req, res) => {
    try {
        res.render("productosCliente", {
            titulo: "Productos",
            sobre: "Lista de productos disponibles",
            css: "cliente/productos.css",
        });
    } catch (error) {
        console.error("Error al cargar la vista de productos del cliente:", error);
        res.status(500).send("Error interno del servidor al cargar la vista.");
    }
}; ///CREE UNA VISTA ESPECIFICA PARA EL CLIENTE

export const carritoCliente = (req, res) => {
    try {
        res.render("carritoCliente", {
            titulo: "Carrito",
            sobre: "Tu carrito de compras",
            css: "cliente/carrito.css"
        });
    } catch (error) {
        console.error("Error al cargar la vista del carrito:", error);
        res.status(500).send("Error interno del servidor al cargar la vista.");
    }
}; // VISTA DE CARRITO DEL CLIENTE


export const ticketCliente = (req, res) => {
    try {
        res.render("ticketCliente", {   
            titulo: "Ticket de Compra",
            sobre: "Detalle de tu compra",
            css: "cliente/ticket.css"
        });
    } catch (error) {
        console.error("Error al cargar la vista del ticket:", error);
        res.status(500).send("Error interno del servidor al cargar la vista.");
    }   

}; /// VISTA DEL TICKET DE CLIENTE
// se usa como principal el login de cliente y de ahi se redirecciona y todo funciona clean

///// ESTOY CREANDO VISTAS VERSION CLIENTE POR QUE NO SE SI NECESITEMOS DESPUES QUE HAYA VISTAS PARA EL ADMIN DE ESTAS COSAS JEJEJ////////