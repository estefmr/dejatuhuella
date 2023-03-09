import express from "express";
const router= express.Router();
import { registrar, perfil, confirmar, autenticar, olvidePassword, comprobarToken, nuevoPassword } from '../controllers/veterinarioController.js'
import checkAuth from "../middleware/authMiddleware.js";

/* area publica */
router.post("/", registrar);
router.get("/confirmar/:token", confirmar)
router.post("/login/", autenticar)
router.post("/olvide-password", olvidePassword)
/* get para enviar al usuario un token que lo vera en la url, comprobarToken: leera el token */
router.get('/olvide-password/:token', comprobarToken)
/* post para agregar nuevo password, nuevoPassword: almacenar nuevo password*/
router.post('/olvide-password/:token', nuevoPassword)
/* simplificar en una linea:
router.get('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)
*/
/* area privada */
router.get("/perfil", checkAuth, perfil);

export default router;