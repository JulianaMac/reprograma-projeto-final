const { connect } = require('../models/Repository')
const usuariosModel = require('../models/UsuariosSchema')

connect()

const getAll = (request, response) => {
    usuariosModel.find((error, usuarios) => {
        if (error){
            return response.status(500).send(error)
        }
        return response.status(200).send(usuarios)
      })
}

const add = (request, response) => {
    
    const novoUsuario = new usuariosModel(request.body)
  
    novoUsuario.save((error) => {
      if (error) {
        return response.status(500).send(error)
      }
      return response.status(201).send(novoUsuario)
    })
  }

  module.exports = {
    add,
    getAll
  }

  