import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import cors from "cors";


const app = express();


// cors permite que todos los dominios se puedan comunicar en este sevridor, si no se susa cors los datos no se envian porque el front esta en un puerto y el back en otro
app.use(cors({
    origin: 'http://localhost:5173',
}));

app.use(morgan('server'));

// 👇 app.use(express.json()); hace que la request se cambie a formato json y pueda ser leido
app.use(express.json());

// hace legibles las cookies
app.use(cookieParser());

//👇 app.use("/api", authRoutes); hace que se diferencien las rutas del backend y del forntend porque pueden llegar a tener el mismo nombre
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;