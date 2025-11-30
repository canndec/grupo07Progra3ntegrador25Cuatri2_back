import { Router } from "express";
import { crearUsuarioSinPassword } from "../controllers/user.controllers.js";

const router = Router();

router.post("/crear-sin-password", crearUsuarioSinPassword);

export default router;