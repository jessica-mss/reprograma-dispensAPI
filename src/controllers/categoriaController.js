const mongoose = require('mongoose');
const Categoria = require('../models/categoria');

//READ & GET & FIND : listar todas as categorias
const getAll = async (req, res) => {
    const categoria = await Categoria.find()
    res.status(200).json(categoria)
};

//READ & GET & FIND : listar um produto/get/findById
const getById = async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id)
        if(categoria == null) {
            return res.status(404).json({message: "categoria não encontrada"})
        }
        res.json(categoria)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

//CREATE & POST & INSERT : criar uma nova categoria para os items da dispensa
const createCategoria = async (req, res) => {
    const categoria = new Categoria({
        _id: new mongoose.Types.ObjectId(),
        codigoId: req.body.codigoId,
        nome: req.body.nome
    })
    const CategoriaJaExiste = await Categoria.findOne({ nome: req.body.nome })
    if (CategoriaJaExiste) {
        return res.status(409).json({ error: "Categoria já cadastrada." })
    }
    try {
        const novaCategoria = await categoria.save()
        res.status(201).json(novaCategoria)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

//UPDATE & PUT/patch & UPDATE (findById/save) : atualizar uma informacao especifica numa categoria
const updateCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id)
        if(categoria == null) {
            return res.status(404).json({message: "Categoria não encontrada"})
        }
        
        if (req.body.codigoId != null) {
            categoria.codigoId = req.body.codigoId
        }
        if (req.body.nome != null) {
            categoria.nome = req.body.nome
        }        
        const categoriaAtualizada = await categoria.save()
        res.json(categoriaAtualizada)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//DELETE & DELETE & REMOVE (findById): deletar um produto da dispensa
const deleteCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id)
        if (categoria == null) {
            return res.status(404).json({ message: "Categoria não encontrada" })
        }
        await categoria.remove()
        res.json({ message: "Categoria deletada com sucesso" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAll,
    getById,
    createCategoria,
    updateCategoria,
    deleteCategoria
};