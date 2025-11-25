// ## IMPORTACIONES
import express from "express"; //framework express
const app = express();  //contiene los metodos

import environments from "./src/api/config/environments.js"; //port
const PORT = environments.port;


//session key: de login creo que es
//const session_key = environments.session_key;



import cors from  "cors"; //modulo cors

//importar middlewares
import { loggerUrl} from "./src/api/middlewares/middlewares.js";
//importar rutas del producto
import { productRoutes, viewRoutes } from "./src/api/routes/index.js";

//incorpora la configuacion en el index.js
import {__dirname, join} from "./src/api/utils/index.js";


//import session from "express-session";


// ## MIDDLEWARES   
app.use(cors()); //el basico que permite todas las solicitudes
app.use(express.json()); //para parsear json en el body
app.use(loggerUrl);

//para servir archivos estaticos (img, css, js)
app.use(express.static(join(__dirname, "src/public")));
    //los archivos estaticos se sirven desde carpeta public

/*// Middleware de sesion 
app.use(session({
    secret: session_key, // Esto firma las cookies para evitar manipulacion
    resave: false, // Esto evita guardar la sesion si no hubo cambios
    saveUninitialized: true // No guarde sesiones vacias
})); */


// ## CONFIG
//configurar ejs como motor de plantillas
app.set("view engine", "ejs");
app.set("views", join(__dirname,"src/views")); //vistas servidas desde la carpeta public

//m

// ## RUTAS         
app.use("/api/productos", productRoutes); //ruta de producto
app.use("/",viewRoutes);//rutas vista


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})