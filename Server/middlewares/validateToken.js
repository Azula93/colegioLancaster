// LOS MIDDLEWARES son funciones que se ejecutan ANTES de que lleguen a una ruta

import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';


// FUNCION PARA AUTENTICAR LOS DATOS DE USUARIO
export const authRequired = (req, res, next) =>{
    const {token} = req.cookies;
    if(!token) return res.status(401).json({message: "no token, authorization denied"});

    jwt.verify(token, TOKEN_SECRET, (err, user) =>{
        if (err) return res.status(403).json({message: 'invalid token'});

        req.user = user;
        next();
    });
 
}