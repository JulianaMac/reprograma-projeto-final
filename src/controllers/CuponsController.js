const { connect } = require('../models/Repository')
const usuariosModel = require('../models/UsuariosSchema')
const { cuponsModel } = require('../models/CuponsSchema')

connect()

const addCupom = async (request, response) => {
  
    const usuarioId = request.params.usuarioId
    const cupom = request.body
    const options = { new: true }
    const novoCupom = new cuponsModel(cupom)
    const usuario = await usuariosModel.findById(usuarioId)
  
    usuario.cupons.push(novoCupom)
    usuario.save((error) => {
      if (error) {
        return response.status(500).send(error)
      }
  
      return response.status(201).send(cupom)
    })
  }

  const getCupons = async (request, response) => {

    const usuarioId = request.params.usuarioId
    await usuariosModel.findById(usuarioId, (error, usuario) => {
      if (error) {
        return response.status(500).send(error)
      }
  
      if (usuario) {
        return response.status(200).send(usuario.cupons)
      }
  
      return response.status(404).send('Usuário não encontrado.')
    })
  }

module.exports = {
    addCupom,
    getCupons
}