import { Router } from "express";
import { crearUsuarioSinPassword } from "../controllers/user.controllers.js"; /// Hola soy santiago aca importo el controlador que crea un usuario sin password

const router = Router();  /// Hola soy santiago creo el router para las rutas de usuario

router.post("/crear-sin-password", crearUsuarioSinPassword); /// Hola soy santiago esta ruta crea un usuario sin password

export default router; /// Hola soy santiago exporto el router para usarlo en index.js