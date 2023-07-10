// aqui se hace la conexion del backend con los datos del registro, se envian esos datos al backend

import axios from "axios";

const API = "http://localhost:3000/api";

export const registerRequest = user => axios.post(`${API}/register`, user)