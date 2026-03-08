const multer = require("multer");
const path = require("path");


const CONSTANTS = {
  EXTENSIONES_PERMITIDAS: [".docx"],
  MAX_FILE_SIZE_MB: 10,
  UPLOAD_DIR: "uploads/",
};


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, CONSTANTS.UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    const nombreOriginal = file.originalname.toLowerCase().replace(/\s+/g, "_");
    const nombreFinal = `${Date.now()}-${nombreOriginal}`;
    cb(null, nombreFinal);
  },
});

const fileFilter = (req, file, cb) => {
  const extension = path.extname(file.originalname).toLowerCase();

  if (!CONSTANTS.EXTENSIONES_PERMITIDAS.includes(extension)) {
    return cb(new Error(`Formato no permitido. Solo se permiten: ${CONSTANTS.EXTENSIONES_PERMITIDAS.join(", ")}`));
  }

  cb(null, true);
};

module.exports = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: CONSTANTS.MAX_FILE_SIZE_MB * 1024 * 1024, 
  },
});
