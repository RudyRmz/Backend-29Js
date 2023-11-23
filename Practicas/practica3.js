const fs = require("fs")


//crear carpetas. Primer argumento la ruta donde se guardara la carpeta, 
// fs.mkdir("./newProject", (err)=>{
//     if (err) throw err
//     console.log("Carpeta se creo correcamente")
//     fs.writeFile("./newProject/index.html","Hola", (err)=>{
//     if (err) throw err
//     console.log("Archivo creado correcamente")
// })
// })

const createProject = (argument, porjectName)=>{
    if(argument === "init"){
        fs.mkdir(`${porjectName}`, (err)=>{
            if (err) throw err
            console.log("Carpeta se creo correcamente")
            fs.writeFile(`./${porjectName}/index.html`,`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                
            </body>
            </html>`, (err)=>{
            if (err) throw err
            console.log("Archivo creado correcamente")
            fs.mkdir(`./${porjectName}/js`, (err)=>{
                if (err) throw err
                console.log("Carpeta JS se creo correcamente")
            })
            fs.mkdir(`./${porjectName}/css`, (err)=>{
                if (err) throw err
                console.log("Carpeta CSS se creo correcamente")
            })
        })
        })
    } else if(argument === "html"){
        fs.writeFile(`./${porjectName}.html`,"Hola", (err)=>{
            if (err) throw err
            console.log("Archivo creado correcamente")
        })
    } else if(argument === "js"){
        fs.writeFile(`./${porjectName}/js/.html`,"Hola", (err)=>{
            if (err) throw err
            console.log("Archivo creado correcamente")
        })
    }
}

console.log(createProject(process.argv[2], process.argv[3]))

// fs.writeFile("./index2.html","Hola2", (err)=>{
//     if (err) throw err
//     console.log("Archivo creado correcamente")
// })

// fs.writeFile("./script.js","Script1", (err)=>{
//     if (err) throw err
//     console.log("Archivo creado correcamente")
// })

