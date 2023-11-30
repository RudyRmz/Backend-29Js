
const mongoose = require("mongoose")

module.exports = {
    connect: async()=>{
        let conection = await mongoose.connect('mongodb+srv://rudyramirezmorales:HGIc2IYs5VpStd0u@cluster0.ucuh1da.mongodb.net/practica');
        if(conection) console.log("DB Connected")
    },
    diconnect: (done)=>{
        mongoose.disconnect(done)
    }
}