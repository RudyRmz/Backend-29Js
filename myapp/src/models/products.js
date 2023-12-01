const mongoose = require("mongoose")

//Esquema 
const productSchema = new mongoose.Schema({
    product_name: {
        unique : true,
        required: [true, "El nombre del producto es requerido"],
        type: String
    },
    price: {
        required: [true, " El precio es requerido"],
        type: Number
    },
    seller: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: "Users" //va a ser el mismo nombre al que se quiere conectar
    }
});

const Products =  mongoose.model("Products", productSchema) // Modelo 
module.exports = Products