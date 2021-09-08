const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const controller = require("../controllers/categoriaController");

//READ & GET & FIND : listar todas as categorias
router.get("/todas", controller.getAll);

//READ & GET & FIND : listar um produto/get/findById
router.get("/filtro/:id", controller.getById);

//CREATE & POST & INSERT : criar uma nova categoria para os items da dispensa
router.post("/cadastrar", controller.createCategoria);

//UPDATE & PUT/patch & UPDATE (findById/save) : atualizar uma informacao especifica numa categoria
router.patch("/atualizar/:id", controller.updateCategoria);

//DELETE & DELETE & REMOVE (findById): deletar um produto da dispensa
router.delete("/excluir/:id", controller.deleteCategoria);

module.exports = router;