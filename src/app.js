const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const usuarios = require('./routes/usuarios')
const cupons = require('./routes/cupons')
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/usuarios', usuarios)
app.use('/cupons', cupons)


app.get('/', (request, response) => {
  response.send('Olá, mundo!')
})


app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)