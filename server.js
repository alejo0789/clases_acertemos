import express from "express";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(join(__dirname, ".")));

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
