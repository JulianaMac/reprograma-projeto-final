const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CuponsSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  valor_pontos: { type: Number, required: true },
})

const cuponsModel = mongoose.model('cupons', CuponsSchema);

module.exports = { cuponsModel, CuponsSchema };