
const mongoose = require("mongoose")

//Esquema 
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String, 
    role: String,
});

const Users =  mongoose.model("Users", userSchema) // Modelo 
module.exports = Users