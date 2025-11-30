import { Router } from "express";
import {
    consultarAdminView,
    crearProductoView,
    modificarAdminView,
    eliminarAdminView,
    productosAdminView, /// VISTA PRODUCTOS ADMIN
} from "../controllers/view.controllers.js";

const router = Router();

//por middleware router, todas las peticiones van al modulos productRoutes que las maneja

router.get("/", (req, res) => {
    res.render("loginAdmin", {
        titulo: "Login administrador",
        sobre: "Bienvenido al Panel Administrador",
        css: "admin/login.css"
    });
}); //// Hola soy santiago, vista del admin es el predeterminado al que va cuando pide la api
router.get("/productosAdmin", productosAdminView); //productosAdmin trae odo

router.get("/consultarAdmin", consultarAdminView); //vista consulta
router.get("/crearAdmin", crearProductoView); //vista crear

router.get("/modificarAdmin", modificarAdminView); //vista modificar
router.get("/eliminarAdmin", eliminarAdminView); //vista eliminar


export default router;