// ## IMPORTACIONES
import express from "express"; //framework express
const app = express();  //contiene los metodos

import environments from "./src/api/config/environments.js"; //port
const PORT = environments.port;

const session_key = environments.session_key;
import session from "express-session";

import bcrypt from "bcrypt"; 

import cors from  "cors"; //modulo cors

//importar middlewares
import { loggerUrl} from "./src/api/middlewares/middlewares.js";
//importar rutas del producto
import { productRoutes, viewRoutes, userRoutes , ventasRoutes, loginRoutes} from "./src/api/routes/index.js";

//incorpora la configuacion en el index.js
import {__dirname, join} from "./src/api/utils/index.js";
import connection from "./src/api/database/db.js";

//import session from "express-session";


// ## MIDDLEWARES   
app.use(cors()); //el basico que permite todas las solicitudes
app.use(express.json()); //para parsear json en el body

// Middleware para parsear las solicitudes POST que enviamos desde el <form> HTML
app.use(express.urlencoded({ extended: true }));

app.use(loggerUrl);

//para servir archivos estaticos (img, css, js)
app.use(express.static(join(__dirname, "src/public")));
    //los archivos estaticos se sirven desde carpeta public

// Middleware de sesion 
app.use(session({
    secret: session_key, // esto firma las cookies para evitar manipulacion/mecanismo de seguridad
    resave: false, //evita guardas la sesion si no hubo cambios
    saveUninitialized: true //no guarda sesiones vacias
}));


// ## CONFIG
//configurar ejs como motor de plantillas
app.set("view engine", "ejs");
app.set("views", join(__dirname,"src/views")); //vistas servidas desde la carpeta public

//m

// ## RUTAS         
app.use("/api/productos", productRoutes); //ruta de producto
app.use("/api/usuarios", userRoutes); // ruta de usuario
app.use("/api/login", loginRoutes); // ruta para login
//endpoint que recibe los datos que enviamos del <form> del login.ejs
/*
app.post("/loginAdmin", async (req,res) => {
    try{
        const {email, contrasenia} = req.body; //del form
        if(!email || !contrasenia){
            return res.render("loginAdmin", {
                titulo: "login admin",
                error: "Todos los campos son necesarios de completar",
                sobre: "Bienvenido al Panel Administrador", 
                css: "admin/login.css"
            });
        }

        //sentencia bcrpt 1
        const sql = "SELECT * FROM usuarios where email = ?";
        const [rows] = await connection.query(sql,[email]);

        //si no se recibe nada no encuentra un usuario con ese mail
        if(rows.length === 0){
            return res.render("loginAdmin", {
                titulo: "login administrador",
                error: "Hubo un error, email o constraseña no validos",
                sobre: "Bienvenido al Panel Administrador", 
                css: "admin/login.css"
            });
        } 

        console.log(rows); // [ { id: 7, name: 'test', email: 'test@test.com', password: 'test' } ]
        const usuario = rows[0]; // Guardamos el usuario en la variable user
        console.table(usuario);

        //bycrpt 2 compara consta hasheado si coincide con la bdd
        const match = await bcrypt.compare(contrasenia, usuario.contrasenia)
        console.log(match); //true o false
        
        if (match) {
            //se guarda la sesion
            req.session.usuario = {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email
            }
            
            res.redirect("/productosAdmin"); //una vez que se guarda redirecciona al dashboard
        } else {
            return res.render("loginAdmin", {
                titulo: "Login admin",
                error: "Ups!, contraseña incorrecta",
                sobre: "Bienvenido al Panel Administrador", 
                css: "admin/login.css"
            });
        }

    } catch (error) {
        console.log("error en el login: ", error);
        res.status(500).json({
            error: "error interno del servidor"
        })
    }

});*/



app.use("/",viewRoutes);//rutas vista
app.use("/api/ventas", ventasRoutes); // rutas de ventas



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
