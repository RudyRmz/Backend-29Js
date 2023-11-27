//routes
const userRoutes =  require("./src/routes/user/index")

const express = require('express')
const app = express()
const port = 3000


app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use("/user", userRoutes)

app.use((resp, req, res, next) => {
    res.status(resp.status).send(resp.send)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.get('/hi', (req, res) => {
//     res.send('Hi!')
// })

// app.post('/', (req, res) => {
//     res.status(201).send('Hello World Post!')
// })

// app.put('/', (req, res) => {
//     res.status(201).send('Hello World Put!')
// })

// app.delete('/', (req, res) => {
//     res.status(200).send('Hello World Delete!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})