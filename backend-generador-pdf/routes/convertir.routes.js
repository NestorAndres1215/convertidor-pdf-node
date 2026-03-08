const express = require("express");
const router = express.Router();
const path = require("path");
const { convertirArchivo, mostrarDescarga } = require("../controllers/convertir.controller");


router.post("/convertir", convertirArchivo);

router.get("/descarga", mostrarDescarga);

module.exports = router;
