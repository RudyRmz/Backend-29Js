const fs = require("fs")

//Para crear un archivo. Primer argumento la ruta donde se guardara, nombre y tipo del archivo a crear, texto que ira dentro del nuevo archivo creado y un callback que recibe un error
// fs.writeFile("./test.txt", "Hola Koders!", (err)=>{
//     if (err) throw err
//     console.log("Archivo creado correcamente")
// })

//Para leer un archivo. Primer argumento la ruta donde se guardara, segundo la codificacion del texto, tercero un callback que tiene dos argumentos, uno el error y otro el contenido del archivo que queremos leer y mostrara. 
// fs.readFile("./test.txt", "utf-8", (err, data)=>{
//     if (err) throw err
//     console.log(data)
// })

//Para modificar / agregar string despues de un texto. primer argumento la ruta donde se guardara, segundo el string a agregar y un callback que recibe un error
// fs.appendFile("./test.txt","Hola! se modifico el texto", (err)=>{
//     if (err) throw err
//     console.log("Archivo se modifico correcamente")
//     fs.readFile("./test.txt", "utf-8", (err, data)=>{
//             if (err) throw err
//             console.log(data)
//         })
// } )

//Para eliminar. primer argumento la ruta donde esta el archivo a aleminar, segundo un callback de error.
// fs.unlink("./test.txt",(err)=>{
//     if (err) throw err
//     console.log("Archivo se elimino correcamente")
// } )

//crear carpetas. Primer argumento la ruta donde se guardara la carpeta, 
// fs.mkdir("./newFolder", (err)=>{
//     if (err) throw err
//     console.log("Carpeta se creo correcamente")
// })

//Eliminar carpetas. primer argumento la ruta donde esta el archivo a aleminar, segundo Recursive para eliminar subdirectorios, Force para forzar el borrado, reciben true o false en forma de objeto {}, tercero un callback de error

// fs.rmdir("./newFolder", {recursive: false}, (err)=>{
//     if (err) throw err
//     console.log("Carpeta se elimino correcamente")
// })

//para ver que hay dentro de las carpetas. Argumento en objeto withFileTypes true o false par que nos liste a detalle o de forma sencilla. Callback con el error y files que nos va a devolver

fs.readdir("./newFolder", {withFileTypes: false}, (err, files)=>{
    if (err) throw err
    files.forEach(file =>{
        console.log(file)
    })
})  
