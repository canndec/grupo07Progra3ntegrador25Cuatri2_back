import { Router } from "express";
import {
    consultarAdminView,
    crearProductoView,
    modificarAdminView,
    eliminarAdminView,
    carritoCliente, /// VISATA CARRITO CLIENTE
    productosAdminView, /// VISTA PRODUCTOS ADMIN
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
        titulo: "Login administrador",
        sobre: "Bienvenido al Panel Adminstrador",
        css: "admin/login.css"
    })
}); //vista del login admin

router.get("/productosAdmin", productosAdminView); //productosAdmin trae odo

router.get("/consultarAdmin", consultarAdminView); //vista consulta por id
router.get("/crearAdmin", crearProductoView); //vista crear

router.get("/modificarAdmin", modificarAdminView); //vista modificar
router.get("/eliminarAdmin", eliminarAdminView); //vista eliminar


export default router;