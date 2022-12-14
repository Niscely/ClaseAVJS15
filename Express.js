
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`¡Hello World! <br> Promedio de 2 numeros (54, 46):  ${promedio}`)
})

let numero1 = 54
let numero2 = 46
promedio = (numero1 + numero2) /2

app.listen(port, () => {
    console.log(`El servidor esta escuchando en http://localhost:${port}
    Promedio de 2 numeros (54, 46):${promedio}`)
})