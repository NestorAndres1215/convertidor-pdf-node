const path = require("path");
const fs = require("fs");
const upload = require("../middlewares/upload");
const { convertirDocxAPdf } = require("../services/convertir.service");
const MESSAGES = require("../utils/messages");

const convertirArchivo = (req, res) => {

  upload.single("archivo")(req, res, async (err) => {

    if (err) {
      return res.status(400).json({
        mensaje: MESSAGES.UPLOAD.ERROR,
        detalle: err.message
      });
    }

    const archivoSubido = req.file.path;
    const nombrePDF = await convertirDocxAPdf(archivoSubido);


    return res.json({
      mensaje: "Archivo convertido correctamente",
      archivo: nombrePDF,
      url: `/output/${nombrePDF}`
    });



  });

};

const mostrarDescarga = (req, res) => {

  const nombreArchivo = req.query.archivo;
  const rutaArchivo = path.resolve("output", nombreArchivo);
  return res.download(rutaArchivo);
};

module.exports = {
  convertirArchivo,
  mostrarDescarga
};