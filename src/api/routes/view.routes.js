import { Router } from "express";
import {productsView } from "../controllers/view.controllers.js"; //controlador de prod
import {productosClienteView } from "../controllers/view.controllers.js";

const router = Router();

//por middleware router, todas las peticiones van al modulos productRoutes que las maneja

router.get("/productosAdmin", productsView); //productosAdmin trae odo
router.get("/productosCliente", productosClienteView); 


router.get("/", (req, res) => {
    res.render("loginCliente", {
        titulo: "login de cliente",
        sobre: "Bienvenido",
        css: "cliente/login.css"
    }); //seusa como principal
});

router.get("/loginAdmin", (req,res) => {
    res.render("loginAdmin", {
        titulo: "login de administrador",
        sobre: "entrar como administrador",
        css: "admin/login.css"
    })
}); //vista del login admin

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