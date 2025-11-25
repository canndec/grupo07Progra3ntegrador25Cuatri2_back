import { Router } from "express";
import {productsView } from "../controllers/view.controllers.js"; //controlador de prod
const router = Router();

//por middleware router, todas las peticiones van al modulos productRoutes que las maneja

router.get("/", productsView); //logincliente como principal

router.get("/loginAdmin", (req,res) => {
    res.render("loginAdmin", {
        titulo: "login de administrador",
        sobre: "entrar como administrador",
        css: "admin/login.css"
    })
})

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