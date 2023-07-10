import mongoose from "mongoose";

// ESQUEMA DE LAS TAREAS
const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    }, 

    description:{
        type: String,
        require: true
    },

    date:{
        type: Date,
        default: Date.now,
    },

    user:{
        // es el id de mongo db, no es un string es un dato espacial de mongodb
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    
}, {
    timestamps: true
});

export default mongoose.model("Task", taskSchema);