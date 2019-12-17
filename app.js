const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const usuarios = require('./src/routes/usuarios')
const cupons = require('./src/routes/cupons')
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/usuarios', usuarios)
app.use('/cupons', cupons)

app.get('/', (request, response) => {
  response.send('Easy Fun - Troque seus pontos por cupons!')
})

app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)