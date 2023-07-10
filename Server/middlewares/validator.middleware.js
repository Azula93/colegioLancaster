
// se le pasa un schema y lo valida
export const validateSchema = (schema) => (req,res,next) => {
    try {
        // lo compara con el req.body que es donde esta la info
        schema.parse(req.body);
        next();
    } catch (error) {
        // recorre el arreglo de errores de zod y con el .map muestra solo los mensajes de error ("email required,etc")
        return res.status(400).json({error: error.errors.map(error => error.message)})
    }
}