const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  codigoId: {
    type: Number,
    required: true
  },
  nome: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('categoria', categoriaSchema);