import mongoose from "mongoose";

// conexion a la DB
export const connectDB = async () =>{

    try {
      
        await mongoose.connect('mongodb://127.0.0.1:27017/ColegioLancaster') 
        console.log(">>>DB is conected");
    } catch (error) {
        console.log(error);
    }
};

