// ESTOS SCHEMAS CREAN VALIDACIONES PARA REGISTRO, LOGIN,ETC SE PUEDEN HACER VALIDACIONES MAS COMPLEJAS
// REVISAR ZOD PARA HACER MAS VALIDACIONES
import {z} from 'zod';

// VALIDA EL REGISTRO 

export const registerSchema = z.object({
    username: z.string({
        required_error:"Username is required",
    }),
    email: z.string({
        required_error:"Email is required",
    }).email({
        message: "Invalid Email",
    }), 
    password: z.string({
        required_error:"Password is required",
    }).min(6,{
        message: "Password must be al least 6 characters",
    }),
});


// VALIDA EL LOGIN 
export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required",
    }).email({
        message: "Invalid Email",
    }),
    password: z.string({
        required_error: "Password is required",
    }).min(6,{
        message: "Password must be at least 6 characters"
    }),
});