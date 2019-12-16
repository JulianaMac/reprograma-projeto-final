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

  const getById = (request, response) => {
    const id = request.params.id
  
    return usuariosModel.findById(id, (error, usuario) => {
      if (error) {
        return response.status(500).send(error)
      }
  
      if (usuario) {
      return response.status(200).send(usuario)
      }
  
      return response.status(404).send('Usuario não encontrado.')
    })
  }

  const update = (request, response) => {
    const id = request.params.id
    const usuarioUpdate = request.body
    const options = { new: true }
  
    usuariosModel.findByIdAndUpdate(
      id,
      usuarioUpdate,
      options,
      (error, usuario) => {
        if (error) {
          return response.status(500).send(error)
        }
  
        if (usuario) {
          return response.status(200).send(usuario)
        }
  
        return response.status(404).send('Usuário não encontrado.')
      }
    )
  }

  module.exports = {
    add,
    getAll,
    getById,
    update
  }

  