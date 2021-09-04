const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send({
        "titulo": "{Reprograma} - Projeto Livre - DispensAPI",
        "version": "1.0.0",
        "mensagem": "Bem vinda à DispensAPI - uma API para facilita a gestão dos seus suprimentos."
    })
});

module.exports = router;