import { Router } from "express";
import { crearVenta,exportarExcelVentas } from "../controllers/ventas.controllers.js";

const router = Router();

console.log("ventas.routes.js cargado");

router.post("/crear", crearVenta); 
router.get("/exportar-excel", exportarExcelVentas);

export default router;