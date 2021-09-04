const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const db = require("./data/database");

db.connect();

app.use(cors());
app.use(express.json());

const produtoRoutes = require("./routes/produto.routes");
app.use("/dispensa", produtoRoutes);

const indexRoutes = require("./routes/index.routes");
app.use("/dispensa/home", indexRoutes);

const categoriaRoutes = require("./routes/categoria.routes");
app.use("/dispensa/categorias", categoriaRoutes);


module.exports = app;