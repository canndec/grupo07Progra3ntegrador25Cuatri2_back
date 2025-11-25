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

export {
    loggerUrl,
    validateId
}