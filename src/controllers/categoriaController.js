const mongoose = require('mongoose');
const Categoria = require('../models/categoria');

const getAll = async (req, res) => {
    const categoria = await Categoria.find()
    res.status(200).json(categoria)
};

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

const updateCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id)
        if (categoria == null) {
            return res.status(404).json({message: "Categoria não encontrada"});
        }
        if (req.body.nome != null) {
            categoria.nome = req.body.nome
        }

        const categoriaAtualizada = await categoria.save()
        res.status(200),json(categoriaAtualizada)

    } catch (err) {
        res.status(500).json({message:err.message})
    }
}

const deleteCategoria = (req, res) => {
    const requiredId = req.params.codigoId;
    Categoria.findOne({ _Id: requestId }, function (err, categoriaFound) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            if (categoriaFound) {
                Computer.deleteOne({ _Id: requestId }, function (err) {
                    if (err) {
                        res.status(500).send({ message: err.message })
                    } else {
                        res.status(200).send({ message: "Categoria deletada com sucesso!" })
                    };
                });
            } else {
                res.status(404).send({ message: "No processor found" });
            };
        };
    });
};


module.exports = {
    getAll,
    createCategoria,
    updateCategoria,
    deleteCategoria
};