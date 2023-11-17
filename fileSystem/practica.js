const fs = require("fs")

//const filePath = "./practicaFileSystem.json"

// fs.readFile(filePath, "utf-8", (err, data)=>{
//     if (err){
//         throw err
//         console.log(data)
//         return
//     } 

//     let objeto = JSON.parse(data)
//     objeto.read = "true"

//     const jsonString = JSON.stringify(objeto, null, 2) 
    
//     fs.writeFile(filePath, jsonString, "utf-8", (err)=>{
//         if(err){
//             console.error("Error al escribir en el archivo", err)
//             return
//         }
//         console.log("Nueva clave agregada exitosamente")
//     })
// })


let pathJson = "./practicaFileSystem.json"

let appendRead = (pathJson)=>{
    fs.readFile( `${pathJson}`, "utf-8", (err, data)=>{
        if (err) throw err
        console.log(data)
    })
}

console.log(appendRead(pathJson))