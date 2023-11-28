const express =  require("express")
const router =  express.Router()
const users = "./src/db/users.json"
const fs = require("fs")
const userController = require("../../controllers/users")
const { send } = require("process")


// router.get('/hi', (req, res) => {
//     res.status(201).send('Hello World Get Router!')
// })

// router.get('/:id', (req, res) => {
//     console.log(req.params)
//     res.status(201).send(`Hello World Get Router Params ${req.params.id}!`)
// })

router.get('/getbyid/:id', userController.getById)

// router.get('/getbyid/:id',  (req, res, next) => {
//     const { id } = req.params
//     fs.readFile(users, 'utf-8', (err, users) => {
//         if (err) next({status:400, send:{msg: "No se pudo abrir el archivo", err: err} })
//         users = JSON.parse(users)
        
//         users.forEach(u => {
//             if (u.id == id) {
//                 next({status: 200, send:{msg: "Usuario encontrado", data: u}})
//             }
//         });
//         next({status:404, send:{msg: "Usuario no encontrado", err: err} })
//     })
// })

router.get('/getall/',  userController.getAll)

// router.get('/getall/',  (req, res, next) => {
//     //const { id } = req.params
//     fs.readFile(users, 'utf-8', (err, users) => {
//         if (err) next({status: 400, send: {msg: "No se pudo abrir el archivo", err: err}})
//         //return res.status(400).send({msg: "No se pudo abrir el archivo", err: err})
//         users = JSON.parse(users)
//         if(users){
//             next({status:200, send:{msg: "Usuarios encontrado", data: users}})
//             //return res.send({msg: "Usuario encontrado", data: users})
//         } else {
//             next({status: 404, send:{msg: "Usuarios no encontrados"}})
//             //return res.status(404).send({msg: "Usuarios no encontrados"})
//         }
//     })
// })

router.post("/post", userController.post)

// router.post("/post", (req, res, next)=>{
//     fs.readFile("./src/db/users.json", 'utf-8', (err, users) => {
//         if (err) next({status: 400, send: {msg: "No se pudo agregar nuevo usuario", err: err}})
//         //return res.status(400).send({msg: "No se pudo agregar nuevo usuario", err: err})
//         //users = JSON.parse(users)

//         users = JSON.parse(users)
//     let newUser = {
//         "id": req.body.id,
//         "first_name": req.body.first_name,
//         "last_name": req.body.last_name,
//         "email": req.body.email,
//         "gender": req.body.gender,
//         "password": req.body.password
//     }
//     console.log(newUser)
//     users.push(newUser)
//     console.log(users)
//     console.log(typeof users)
//     let newObjet = JSON.stringify(users)

//     fs.writeFile("./src/db/users.json", newObjet, (err)=>{
//         if (err) next({status: 400, send:{msg: "No se pudo agregar nuevo usuario", err: err} })
//         //return res.status(400).send({msg: "No se pudo agregar nuevo usuario", err: err})
//         //console.log("Archivo guardado correctamente")
        
//         next({status: 201, send:{msg: "Usuario agregado", data: users}})
//         //return res.send({msg: "Usuario agregado", data: users})
//     } )
//     })
// })

router.delete('/delete/:id', userController.delete)

// router.delete('/delete/:id', (req, res, next) => {
//     const { id } = req.params;

//     fs.readFile("./src/db/users.json", 'utf-8', (err, data) => {
//         if (err) next({status:400, send:{ msg: "No se pudo abrir el archivo", err: err } })
//         //return res.status(400).send({ msg: "No se pudo abrir el archivo", err: err });

//         let users = JSON.parse(data);

//         const filteredUsers = users.filter(u => u.id != id);

//         if (filteredUsers.length < users.length) {
//             fs.writeFile("./src/db/users.json", JSON.stringify(filteredUsers), (err) => {
//                 if (err) next({status: 400, send:{ msg: "No se pudo eliminar el usuario", err: err } })
//                 //return res.status(400).send({ msg: "No se pudo eliminar el usuario", err: err });

//                 next({status: 200, send: { msg: "Usuario eliminado correctamente" }})
//                 //return res.send({ msg: "Usuario eliminado correctamente" });
//             });
//         } else {
//             next({status: 404, send:{ msg: "Usuario no encontrado" }})
//             //return res.status(404).send({ msg: "Usuario no encontrado" });
//         }
//     });
// });

router.put('/put/:id', userController.put)

// router.put('/put/:id', (req, res, next) => {
//     const { id } = req.params;

//     fs.readFile("./src/db/users.json", 'utf-8', (err, data) => {
//         if (err) next({status: 400, send:{ msg: "No se pudo abrir el archivo", err: err } })
//         //return res.status(400).send({ msg: "No se pudo abrir el archivo", err: err });

//         let users = JSON.parse(data);

//         let updatedUserIndex = -1;
//         const updatedUsers = users.map((u, index) => {
//             if (u.id == id) {
//                 updatedUserIndex = index;
//                 return {
//                     ...u,
//                     first_name: req.body.first_name || u.first_name,
//                     last_name: req.body.last_name || u.last_name,
//                     email: req.body.email || u.email,
//                     gender: req.body.gender || u.gender,
//                     password: req.body.password || u.password
//                 };
//             }
//             return u;
//         });

//         if (updatedUserIndex !== -1) {
//             fs.writeFile("./src/db/users.json", JSON.stringify(updatedUsers), (err) => {
//                 if (err) next({status: 400, send: { msg: "No se pudo actualizar el usuario", err: err }})
//                 //return res.status(400).send({ msg: "No se pudo actualizar el usuario", err: err });
                
//                 next({status: 201, send:{ msg: "Usuario actualizado correctamente", data: updatedUsers[updatedUserIndex] } })
//                 //return res.send({ msg: "Usuario actualizado correctamente", data: updatedUsers[updatedUserIndex] });
//             });
//         } else {
//             next({status: 404, send: { msg: "Usuario no encontrado" }})
//             //return res.status(404).send({ msg: "Usuario no encontrado" });
//         }
//     });
// });



// router.post('/', (req, res) => {
//     console.log(req.body)
//     res.status(201).send(`Hello ${req.body.name} desde el body!`)
// })

// router.post('/hi', (req, res) => {
//     res.status(201).send('Hello World Post Router!')
// })

// router.put('/hi', (req, res) => {
//     res.status(201).send('Hello World Put Router!')
// })

// router.delete('/hi', (req, res) => {
//     res.status(200).send('Hello World DeleteRouter!')
// })

router.use((req, res, next) => {
    // if (!req.body.password || !req.body.email) {
    // res.status(400).send({msg: "El Email y Password son requeridos"})
    // }
    next()
})

module.exports = router