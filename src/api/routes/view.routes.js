import { Router } from "express";
import {productsView } from "../controllers/view.controllers.js"; //controlador de prod
const router = Router();

//por middleware router, todas las peticiones van al modulos productRoutes que las maneja

router.get("/", productsView);
router.get("/consultar", (req,res) => {
    //falta algo aca

    res.render("consultar", {
        titulo: "Consultar",
        sobre: "consultar producto por id"
    })
});

router.get("/crear", (req,res) => {
    res.render("crear", {
        titulo: "Crear",
        sobre: "crear producto"
    })
});

router.get("/modificar", (req,res) => {
    res.render("modificar", {
        titulo: "Modificar",
        sobre: "Modificar/actualizar un producto"
    })
});

router.get("/eliminar", (req, res) => {
    res.render("eliminar", {
        titulo: "eliminar",
        sobre: "eliminar un producto"
    })
});

export default router;