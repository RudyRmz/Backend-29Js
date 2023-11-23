const fs = require("fs")

// const filePath = "./practicaFileSystem.json"
const filePath = process.argv[2]


fs.readFile(filePath, "utf-8", (err, data)=>{
    if (err) throw err

    let objet = JSON.parse(data)
    objet.read = true
    
    fs.writeFile(filePath, JSON.stringify(objet), (err)=>{
        if(err) throw err
        console.log("Nueva clave agregada exitosamente")
    })
})