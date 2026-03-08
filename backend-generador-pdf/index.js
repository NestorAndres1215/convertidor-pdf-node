const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors"); 

const convertirRoutes = require("./routes/convertir.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "http://localhost:4321"
}));

["uploads", "output"].forEach((dir) => {
  const ruta = path.resolve(dir);
  if (!fs.existsSync(ruta)) {
    fs.mkdirSync(ruta, { recursive: true });
  }
});

app.use(express.urlencoded({ extended: true }));

app.use("/output", express.static(path.resolve("output")));

app.use("/", convertirRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});