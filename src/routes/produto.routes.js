const express = require("express");
const router = express.Router();
const controller = require("../controllers/produtoController");


//READ & GET & FIND : listar todos os itens da dispensa
router.get("/todos", controller.getAll);

//CREATE & POST & INSERT : criar um novo item da dispensa
router.post('/adicionar', controller.createProduto);

//listar um produto/get/findById

//UPDATE & PUT/patch & UPDATE (findById/save) : atualizar uma informacao especifica num item da dispensa

//DELETE & DELETE & REMOVE (findById): deletar um produto da dispensa

module.exports = router;