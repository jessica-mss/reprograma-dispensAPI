const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const controller = require("../controllers/produtoController");


//READ & GET & FIND : listar todos os itens da dispensa
router.get("/", controller.getAll);

//READ & GET & FIND : listar itens da dispensa por categoria
router.get("/filtro", controller.getByCategoria);

//CREATE & POST & INSERT : criar um novo item da dispensa
router.post("/adicionar", controller.createProduto);


//UPDATE & PUT/patch & UPDATE (findById/save) : atualizar uma informacao especifica num item da dispensa
router.patch("/atualizar/:id", controller.updateProduto);

//DELETE & DELETE & REMOVE (findById): deletar um produto da dispensa
router.delete("/excluir/:id", controller.deleteProduto);


module.exports = router;