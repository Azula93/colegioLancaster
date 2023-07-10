import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {getTask, getTasks, createTask,updateTasks, deleteTasks} from '../controllers/tasks.controller.js';
import {validateSchema} from '../middlewares/validator.middleware.js';
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

// se debe colocar en le orden adecuado (url, luego se valida si el usuario esta autenticado, luego se actualiza la tarea)
router.get('/tasks', authRequired, getTasks);

router.get('/tasks/:id', authRequired, getTask);

// aqui esta la url('/tasks'), luego se valida si el usuario esta autenticado(authRequired), luego se verifica que lo ingresado es valido(validateSchema) y luego se crea la tarea
router.post('/tasks', authRequired,validateSchema(createTaskSchema), createTask );

router.delete('/tasks/:id', authRequired, deleteTasks);

router.put('/tasks/:id', authRequired, updateTasks);

export default router;