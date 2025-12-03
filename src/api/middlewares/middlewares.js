import productModels from "../models/product.models.js"; //para la validacion - trae consulta sql

// middlewares de aplicacion logger -> por consola traer cada peticion que se produjo  -> se aplica a todas las peticiones y respuestas 
const loggerUrl = (req,res,next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    next(); //NECESARIO         
};

// middlewares de ruta  valdiador de id
const validateId = (req,res,next) => {
    const { id } = req.params; //el req.params obtiene de la ruta
    if(!id || isNaN(Number(id))) {
        return res.status(400).json({
            message: "El id  del producto debe ser un numero valido"
        });
    }
    req.id = parseInt(id, 10);
    console.log("Id validado: ", req.id);
    next();
};
const validarRepetido = async (req,res,next) => {
    
    const {nombre} = req.params; //req.body obtiene de peticiones
    
    const [rows] = await productModels.buscarNombre(nombre);
    if(rows.length > 0){
        return res.status(400).json({
            message: `El producto con nombre ${nombre} ya existe`
        }); //si ya existe corta el flujo
    }
    console.log("Nombre ingresado validado", req.nombre);
    next();
}
const validarPrecio = async (req,res,next) => {
    const {precio} = req.body; //porq viene 

    if(precio <= 0){
        return res.status(400).json({
            message: `El precio que ingresa debe ser mayor a $0`
        });
    }
    console.log("Precio ingresado validado", req.precio); 
    next();
}

// para proteger las vistas si no se hizo login
const requiereLogin = (req, res, next) => {
    if(!req.session.usuario) {
        return res.redirect("/");
    }
    next(); 
}


export {
    loggerUrl,
    validateId,
    validarRepetido,
    validarPrecio,
    requiereLogin
}