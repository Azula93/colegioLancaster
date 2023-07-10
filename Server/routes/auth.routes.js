import { Router } from "express";
import {login, register, logOut, profile} from "../controllers/auth.controller.js"
import {authRequired} from '../middlewares/validateToken.js'
import { validateSchema } from "../middlewares/validator.middleware.js";
import {registerSchema, loginSchema} from '../schemas/auth.schemas.js'
const router = Router();

// AQUI SE COLOCAN LAS RUTAS COMO LOGIN, REGISTER, ETC
router.post('/register', validateSchema(registerSchema),register);

router.post('/login',validateSchema(loginSchema), login);

router.post('/logout', logOut);

router.get('/profile',authRequired, profile);

export default router;