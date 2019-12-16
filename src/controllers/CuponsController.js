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

    const usuarioId = request.params.id
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

    const updateCupom = async (request, response) => {

    const usuarioId = request.params.usuarioId
    const cupomId = request.params.cupomId
    const options = { new: true }

   usuariosModel.findOneAndUpdate(
      { _id: usuarioId, 'cupons._id': cupomId },
      {
        $set: {
          'cupons.$.nome': request.body.nome,
          'cupons.$.valor_pontos': request.body.valor_pontos
        }
      },
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

  const getCupomById = async (request, response) => {
    const usuarioId = request.params.usuarioId
    const cupomId = request.params.cupomId
    const usuario = await usuariosModel.findById(usuarioId)
    const cupom = usuario.cupons.find(cupom => cupom._id == cupomId)
  
    return response.status(200).send(cupom)
  }

module.exports = {
    addCupom,
    getCupons,
    updateCupom,
    getCupomById
}