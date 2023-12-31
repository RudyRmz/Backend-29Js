
const mongoose = require("mongoose")

//Esquema 
const userSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        unique : true,
        required: true,  
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Debe ingresar un correo valido"], 
    },
    password: {
        type:String,
        required: [true, "El password es requerido"], 
        match: /^(.){8,300}$/
    }, 
    gender: {
        type: String,
        required: [true, "El gender es requerido: Male / Female"], 
        // enum: ["Female", "Male"],
        enum:{
            values: ["Female", "Male"],
            message: '{VALUE} is not supported'
        }
    },
});

const Users =  mongoose.model("Users", userSchema) // Modelo 
module.exports = Users