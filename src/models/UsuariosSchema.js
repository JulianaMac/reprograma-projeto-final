const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsuariosSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  foto: { type: String, required: true },
  senha: { type: String, required: true },
  //pontos_disponiveis: { type: String, required: true}
})

const usuariosModel = mongoose.model('usuarios', UsuariosSchema);

module.exports = usuariosModel;