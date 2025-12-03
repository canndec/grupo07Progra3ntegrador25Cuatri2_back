import { Router } from "express";
import {
    crearUsuarioAdminView,
    consultarAdminView,
    crearProductoView,
    modificarAdminView,
    eliminarAdminView,
    productosAdminView, /// VISTA PRODUCTOS ADMIN
} from "../controllers/view.controllers.js";
import { requiereLogin } from "../middlewares/middlewares.js";

const router = Router();

//por middleware router, todas las peticiones van al modulos productRoutes que las maneja

router.get("/", (req, res) => {
    res.render("loginAdmin", {
        titulo: "Login administrador",
        sobre: "Bienvenido al Panel Administrador",
        css: "admin/login.css"
    });
}); //// Hola soy santiago, vista del admin es el predeterminado al que va cuando pide la api
router.get("/productosAdmin", requiereLogin, productosAdminView); //productosAdmin trae odo

router.get("/consultarAdmin", requiereLogin, consultarAdminView); //vista consulta
router.get("/crearAdmin", requiereLogin, crearProductoView); //vista crear

router.get("/modificarAdmin", requiereLogin, modificarAdminView); //vista modificar
router.get("/eliminarAdmin",requiereLogin, eliminarAdminView); //vista eliminar
router.get("/crearUsuarioAdmin", requiereLogin, crearUsuarioAdminView); //hacer un alta de usuario 

export default router;