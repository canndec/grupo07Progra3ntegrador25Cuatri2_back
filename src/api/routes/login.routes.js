import { Router } from "express";
import { loginAdministrador, cerrarSesion } from "../controllers/login.controllers.js";
const router = Router();  

console.log("login.routes.js cargado");

router.post("/", loginAdministrador); //para manejar el login, el ingreso/encript
router.post("/logout", cerrarSesion); //endpoint para logout
export default router;