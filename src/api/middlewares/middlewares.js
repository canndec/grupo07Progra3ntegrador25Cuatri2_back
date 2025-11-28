import productModels from "../models/product.models.js"; //para la validacion - trae consulta sql

// middlewares de aplicacion logger -> por consola traer cada peticion que se produjo  -> se aplica a todas las peticiones y respuestas 
const loggerUrl = (req,res,next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    next(); //NECESARIO         
};

// middlewares de ruta  valdiador de id
const validateId = (req,res,next) => {
    const { id } = req.params;
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
    console.log("validarRepetido ejecutándose…");

    const {nombre} = req.body;
    console.log("Nombre ingresado validado:", nombre);
    
    const [rows] = await productModels.buscarNombre(nombre);
    if(rows.length > 0){
        return res.status(400).json({
            message: `El producto con nombre ${nombre} ya existe`
        }); //si ya existe corta el flujo
    }
    console.log("Nombre ingresado valdiado", req.nombre);
    next();
}
export {
    loggerUrl,
    validateId,
    validarRepetido
}