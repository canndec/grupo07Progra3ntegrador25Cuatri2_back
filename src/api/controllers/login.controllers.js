import userModels from "../models/user.models.js"; // uso el mismo user models para no crear otro archivo por una sentencia sola
import bcrypt from "bcrypt";

//endpoint que recibe los datos que enviamos del <form> del login.ejs
export const loginAdministrador = async (req,res) => {
    try{
        console.log("entrando a loginAdministrador")
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
        const [rows] = await userModels.buscarEmail(email); //busca el usuario por email

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
        console.log("hay match contraseñas",match); //true o false
        
        if(!match){ //si no coincide las contraseñas encriptadas
            return res.render("loginAdmin", {
                titulo: "Login Administrador",
                error: "Ups!, contraseña incorrecta",
                sobre: "Bienvenido al Panel Administrador",
                css: "admin/login.css"
            });
        }
        req.session.usuario = { //guardo la sesion
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email
        }
        res.redirect("/productosAdmin")
    } catch (error) {
        console.log("error en el login: ", error);
        res.status(500).json({
            error: "error interno del servidor"
        })
    }

}

export const cerrarSesion = (req,res) => {
    req.session.destroy( (error) => {
        if(error) {
            console.log("Error al destruir la sesion: ", error);
            return res.status(500).json({
                error: "error al cerrar sesion"
            });
        }
        res.redirect("/"); //pantallaprincipl que es el login
    })
}