// ## IMPORTACIONES
import express from "express"; //framework express
const app = express();

import environments from "./src/api/config/environments.js"; //port
const PORT = environments.port;
import cors from  "cors"; //modulo cors
/*
import { loggerUrl} from "./src/api/middlewares/middlewares.js";
import { productRoutes } from "./src/api/routes/index.js";

// ## MIDDLEWARES   
app.use(cors());
app.use(express.json()); //para parsear json en el body
app.use(loggerUrl);

*/
// ## RUTAS         
//app.use("/api/productos", productRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})