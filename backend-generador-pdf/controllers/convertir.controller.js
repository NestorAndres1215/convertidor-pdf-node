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

    try {

      const nombrePDF = await convertirDocxAPdf(archivoSubido);

      fs.unlink(archivoSubido, (unlinkErr) => {
        if (unlinkErr) {
          console.warn("No se pudo eliminar el archivo temporal:", unlinkErr.message);
        }
      });

  
      return res.json({
        mensaje: "Archivo convertido correctamente",
        archivo: nombrePDF,
        url: `/output/${nombrePDF}`
      });

    } catch (error) {

      fs.unlink(archivoSubido, () => {});

      return res.status(500).json({
        mensaje: MESSAGES.CONVERT.ERROR,
        detalle: error.message
      });

    }

  });

};

const mostrarDescarga = (req, res) => {

  const nombreArchivo = req.query.archivo;

  const rutaArchivo = path.resolve("output", nombreArchivo);

  if (!fs.existsSync(rutaArchivo)) {
    return res.status(404).json({
      mensaje: MESSAGES.DOWNLOAD.NOT_FOUND
    });
  }

  return res.download(rutaArchivo);

};

module.exports = {
  convertirArchivo,
  mostrarDescarga
};