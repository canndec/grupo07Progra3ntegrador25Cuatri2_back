//middleware router
import { Router } from "express";
const router = Router();


import { validateId } from "../middlewares/middlewares.js";
import {traerTodosLosProductos, traerProductosPorId, crearProducto, actualizarProducto, eliminarProducto} from "../controllers/product.controllers.js";


router.get("/", (req, res) => {
    res.render("loginCliente"); //seusa como principal
});


router.get("/", traerTodosLosProductos); // GET -> trae todo
router.get("/:id",validateId, traerProductosPorId ); // get product by id
router.post("/", crearProducto); // POST - crear producto
router.put("/", actualizarProducto); // PUT - actualizar producto
router.delete("/:id", validateId, eliminarProducto); // DELETE - eliminar producto

export default router; //exportar todas las rutas