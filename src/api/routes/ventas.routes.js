import { Router } from "express";
import { crearVenta } from "../controllers/ventas.controllers.js";

const router = Router();

console.log("ventas.routes.js cargado");

router.post("/crear", crearVenta); 

export default router;