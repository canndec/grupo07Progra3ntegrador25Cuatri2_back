//middleware router
import { Router } from "express";
const router = Router();

import { validateId } from "../middlewares/middlewares.js";
import { createProduct, getAllProducts, getProductById, modifyProduct, removeProduct } from "../controllers/products.controllers.js";


router.get("/", getAllProducts); // GET -> trae todo
router.get("/:id",validateId, getProductById ); // get product by id
router.post("/", createProduct); // POST - crear producto
router.put("/", modifyProduct); // PUT - actualizar producto
router.delete("/:id", validateId, removeProduct); // DELETE - eliminar producto

export default router; //exportar todas las rutas