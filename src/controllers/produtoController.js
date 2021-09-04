const mongoose = require('mongoose');
const Produto = require('../models/produto');

const getAll = async (req, res) => {
    const dispensa = await Produto.find().populate("categoria")
    res.status(200).json(dispensa)
};

const createProduto = async (req, res) => {
    const produto = new Produto({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        categoria: req.body.categoria,
        quantidade: req.body.quantidade,
        dataDaCompra: req.body.dataDaCompra
    })
    const ProdutoJaExiste = await Produto.findOne({ nome: req.body.nome })
    if (ProdutoJaExiste) {
        return res.status(409).json({ error: "Produto já cadastrado. Faça alterações apenas na quantidade." })
    }
    try {
        const novoProduto = await produto.save()
        res.status(201).json(novoProduto)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

module.exports = {
    getAll,
    createProduto
};