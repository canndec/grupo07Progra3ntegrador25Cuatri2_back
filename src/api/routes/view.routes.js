import { Router } from "express";
import {

    carritoCliente, /// VISATA CARRITO CLIENTE
    productsView, /// VISTA PRODUCTOS ADMIN
    productosClienteView, /// VISTA PRODUCTOS CLIENTE
    ticketCliente /// VISTA TICKET CLIENTE
} from "../controllers/view.controllers.js";

const router = Router();

//por middleware router, todas las peticiones van al modulos productRoutes que las maneja

///////////////////////////////////////////////CLIENTE//////////////////////////////////////////

router.get("/", (req, res) => {
    res.render("loginCliente", {
        titulo: "login de cliente",
        sobre: "Bienvenido",
        css: "cliente/login.css"
    }); 
}); //vista del login cliente

router.get("/productosCliente", productosClienteView);  // vista productos cliente
router.get("/ticketCliente", ticketCliente); //vista ticket cliente
router.get("/carritoCliente", carritoCliente); //vista carrito cliente

////////////////////////////////////////////ADMIN////////////////////////////////////////////////

router.get("/loginAdmin", (req,res) => {
    res.render("loginAdmin", {
        titulo: "login de administrador",
        sobre: "entrar como administrador",
        css: "admin/login.css"
    })
}); //vista del login admin

router.get("/productosAdmin", productsView); //productosAdmin trae odo

router.get("/consultar", (req,res) => {
    //falta algo aca

    res.render("consultar", {
        titulo: "Consultar",
        sobre: "consultar producto por id",
        css: "consultarAdmin.css"
    })
});

router.get("/crear", (req,res) => {
    res.render("crear", {
        titulo: "Crear",
        sobre: "crear producto",
        css: "crearAdmin.css"
    })
});

router.get("/modificar", (req,res) => {
    res.render("modificar", {
        titulo: "Modificar",
        sobre: "Modificar/actualizar un producto",
        css:"modificarAdmin.css"
    })
});

router.get("/eliminar", (req, res) => {
    res.render("eliminar", {
        titulo: "eliminar",
        sobre: "eliminar un producto",
        css: "eliminar.css"
    })
});

export default router;