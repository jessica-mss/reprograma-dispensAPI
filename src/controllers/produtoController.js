const mongoose = require('mongoose');
const Produto = require('../models/produto');


//READ & GET & FIND : listar todos os itens da dispensa
const getAll = async (req, res) => {
    const dispensa = await Produto.find().populate("categoria")
    res.status(200).json(dispensa)
};

//READ & GET & FIND : listar itens da dispensa por categoria
const getByCategoria = async (req, res) => {
    const categoriaSolicitada = req.query.categoria
    const dispensa = await Produto.find().populate("categoria")
    const dispensaFiltrada = dispensa.filter(itemDispensa => itemDispensa.categoria.categoria == categoriaSolicitada)
    res.json(dispensaFiltrada)
}

//CREATE & POST & INSERT : criar um novo item da dispensa
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

//UPDATE & PUT/patch & UPDATE (findById/save) : atualizar uma informacao especifica num item da dispensa
const updateProduto = async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.id)
        if(produto == null) {
            return res.status(404).json({message: "Produto não encontrado"})
        }
        
        if (req.body.nome != null) {
            produto.nome = req.body.nome
        }
        if (req.body.categoria != null) {
            produto.categoria = req.body.categoria
        }  
        if (req.body.quantidade != null) {
            produto.quantidade = req.body.quantidade
        }   
        if (req.body.dataDaCompra != null) {
            produto.dataDaCompra = req.body.dataDaCompra
        }         
        const categoriaAtualizada = await categoria.save()
        res.json(categoriaAtualizada)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//DELETE & DELETE & REMOVE (findById): deletar um produto da dispensa
const deleteProduto = async (req, res) => {
    try {
        const dispensa = await Produto.findById(req.params.id)
        if (dispensa == null) {
            return res.status(404).json({ message: "Produto não encontrado" })
        }
        await dispensa.remove()
        res.json({ message: "Produto deletado com sucesso" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getAll,
    getByCategoria,
    createProduto,
    updateProduto,
    deleteProduto
};