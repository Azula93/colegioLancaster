import mongoose from "mongoose";

// se crea el esquema de los datos del usuario, tipos de datos (string,number,etc), si es requerido, etc
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        trim: true,
    },
    email:{
        type:String,
        required: true,
        // trim es para quitar los espacios en caso del que el usuario los coloque, solo toma los caracteres y borra los espacios
        trim: true,
        unique:true
    },
    password:{
        type:String,
        required: true,
        trim: true,
    },
}, {
    // envia los datos de fecha y hora de creacion del usuario
    timestamps: true
})

export default mongoose.model('User', userSchema)