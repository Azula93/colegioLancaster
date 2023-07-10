import app from "./app.js";
 import { connectDB } from "./db.js";

// llamada para conexion a la DB
connectDB();

// puerto al cual se conecta
app.listen(3000);
// muestra si se conectó al puerto
console.log('server on port', 3000);