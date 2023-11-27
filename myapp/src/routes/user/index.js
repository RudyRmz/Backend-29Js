const express =  require("express")
const router =  express.Router()
const users = "./src/db/users.json"
const fs = require("fs")
const { send } = require("process")


router.get('/hi', (req, res) => {
    res.status(201).send('Hello World Get Router!')
})

// router.get('/:id', (req, res) => {
//     console.log(req.params)
//     res.status(201).send(`Hello World Get Router Params ${req.params.id}!`)
// })

router.get('/getbyid/:id',  (req, res) => {
    const { id } = req.params
    fs.readFile(users, 'utf-8', (err, users) => {
        if (err) return res.status(400).send({msg: "No se pudo abrir el archivo", err: err})
        users = JSON.parse(users)
        
        users.forEach(u => {
            if (u.id == id) {
                return res.send({msg: "Usuario encontrado", data: u})
            }
        });
        return res.status(404).send({msg: "Usuario no encontrado"})
    })
})

router.get('/getall/',  (req, res, next) => {
    //const { id } = req.params
    fs.readFile(users, 'utf-8', (err, users) => {
        if (err) next({status: 400, send: {msg: "No se pudo abrir el archivo", err: err}})
        //return res.status(400).send({msg: "No se pudo abrir el archivo", err: err})
        users = JSON.parse(users)
        if(users){
            return res.send({msg: "Usuario encontrado", data: users})
        } else {
            return res.status(404).send({msg: "Usuarios no encontrados"})
        }
    })
})

router.post("/post", (req, res)=>{
    fs.readFile("./src/db/users.json", 'utf-8', (err, users) => {
        if (err) return res.status(400).send({msg: "No se pudo agregar nuevo usuario", err: err})
        //users = JSON.parse(users)

        users = JSON.parse(users)
    let newUser = {
        "id": req.body.id,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "email": req.body.email,
        "gender": req.body.gender,
        "password": req.body.password
    }
    console.log(newUser)
    users.push(newUser)
    console.log(users)
    console.log(typeof users)
    let newObjet = JSON.stringify(users)

    fs.writeFile("./src/db/users.json", newObjet, (err)=>{
        if (err) return res.status(400).send({msg: "No se pudo agregar nuevo usuario", err: err})
        //console.log("Archivo guardado correctamente")
        
        return res.send({msg: "Usuario agregado", data: users})
    } )
    })
})

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;

    fs.readFile("./src/db/users.json", 'utf-8', (err, data) => {
        if (err) return res.status(400).send({ msg: "No se pudo abrir el archivo", err: err });

        let users = JSON.parse(data);

        const filteredUsers = users.filter(u => u.id != id);

        if (filteredUsers.length < users.length) {
            fs.writeFile("./src/db/users.json", JSON.stringify(filteredUsers), (err) => {
                if (err) return res.status(400).send({ msg: "No se pudo eliminar el usuario", err: err });

                return res.send({ msg: "Usuario eliminado correctamente" });
            });
        } else {
            return res.status(404).send({ msg: "Usuario no encontrado" });
        }
    });
});

router.put('/put/:id', (req, res) => {
    const { id } = req.params;

    fs.readFile("./src/db/users.json", 'utf-8', (err, data) => {
        if (err) return res.status(400).send({ msg: "No se pudo abrir el archivo", err: err });

        let users = JSON.parse(data);

        let updatedUserIndex = -1;
        const updatedUsers = users.map((u, index) => {
            if (u.id == id) {
                updatedUserIndex = index;
                return {
                    ...u,
                    first_name: req.body.first_name || u.first_name,
                    last_name: req.body.last_name || u.last_name,
                    email: req.body.email || u.email,
                    gender: req.body.gender || u.gender,
                    password: req.body.password || u.password
                };
            }
            return u;
        });

        if (updatedUserIndex !== -1) {
            fs.writeFile("./src/db/users.json", JSON.stringify(updatedUsers), (err) => {
                if (err) return res.status(400).send({ msg: "No se pudo actualizar el usuario", err: err });

                return res.send({ msg: "Usuario actualizado correctamente", data: updatedUsers[updatedUserIndex] });
            });
        } else {
            return res.status(404).send({ msg: "Usuario no encontrado" });
        }
    });
});

router.post('/', (req, res) => {
    console.log(req.body)
    res.status(201).send(`Hello ${req.body.name} desde el body!`)
})

router.post('/hi', (req, res) => {
    res.status(201).send('Hello World Post Router!')
})

router.put('/hi', (req, res) => {
    res.status(201).send('Hello World Put Router!')
})

router.delete('/hi', (req, res) => {
    res.status(200).send('Hello World DeleteRouter!')
})

module.exports = router