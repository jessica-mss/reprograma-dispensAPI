const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/dispensAPI",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

let db = mongoose.connection

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", () => {
    console.log("conexão feita com sucesso.")
})

const produtoRoutes = require("./routes/produto.routes");
app.use("/dispensa", produtoRoutes);

const indexRoutes = require("./routes/index.routes");
app.use("/dispensa/home", indexRoutes);

const categoriaRoutes = require("./routes/categoria.routes");
app.use("/dispensa/categorias", categoriaRoutes);


module.exports = app;