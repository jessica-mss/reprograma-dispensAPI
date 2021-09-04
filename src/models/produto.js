const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "categoria"
  },
  quantidade: {
    type: Number,
    required: true
  },
  dataDaCompra: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('produto', produtoSchema);