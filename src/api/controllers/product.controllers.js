import productModels from "../models/product.models.js";
// controlador
// GET -> trae todo
export const traerTodosLosProductos = async (req, res) => {
    try{
        const [rows] = await productModels.seleccionarTodosProductos();

        res.status(200).json({
            payload: rows,
            messange: rows.length === 0 ? "No se encontraron productos" : "Productos encontrados"
        });
    }catch(error){
        console.error(error)
        res.status(500).json({
            message: "error interno al obtener productos"
        });

    }
};

// get product by id
export const traerProductosPorId = async (req,res) => {
    try{
        let { id } = req.params; //el valor numerico 
        
        // optimizacion 1 - validacion parametros
        const [rows] = await  productModels.seleccionarProductosPorId(id);
        
        // optimizacion 2
        if(rows.length === 0){
            console.log("Error, no existe un producto con ese id");
            return res.status(404).json({
                message: `No se encontró el producto con id ${id}`
            });
        }

        res.status(200).json({
            payload: rows
        });

    } catch(error){
        console.error("error obteniendo el producto con id", error.message);
        res.status(500).json({
            error: "error interno al obtener el producto con id"
        });
    }
};

// POST - crear producto
export const crearProducto = async (req,res) => {
    try{
        console.log("prueba2")
        const {nombre, precio, imagen, categoria} = req.body;
        console.log(req.body);

        //optimizacion 1 - 
        if(!nombre || !precio || !imagen || !categoria){
            //el endpoint termina en el return y el usuario lo recibe
            return res.status(400).json({
                message: "Datos invalidos, asegurate de enviar todos los campos del formulario"
            });
        }
        let [rows] = await productModels.insertarProducto(nombre, precio, imagen, categoria);
        
        console.log(rows);
        
        res.status(201).json({
            message: "producto creado con exito",
            productId: rows.insertId
        });

    }catch (error) {
        console.error("Error interno del servidor", error);
        res.status(500).json({
            message: "error interno del servidor",
            error: error.message
        });
    }
};

// PUT - actualizar producto
export const actualizarProducto = async (req, res) => {
    try {
        let {id, nombre, precio, imagen, categoria, activo} = req.body;
        
        // optimizacion 1 - valdiacion basica de datos
        if(!nombre || !precio || !imagen || !categoria || !activo){
            return res.status(400).json({
                message: "Faltan campos requeridos"
            });
        }
        let [result] = await productModels.actualizarProducto(nombre, precio, imagen, categoria, id);
        // optimizacion 2  - que se actualziara el prod
        if(result.affectedRows === 0){
            return res.status(400).json({
                message: "No se actualizo el producto"
            });
        }
        res.status(200).json({
            message: "Producto actualizado correctamente"
        });
        
        
    } catch (error) {
        console.error("Error al actualizar el producto: ", error);
        
        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message
        })
    }
};

// DELETE - eliminar producto
export const eliminarProducto = async (req,res) => {
    try{
        let { id } = req.params;
        let [result] = await productModels.eliminarProducto(id);

        // optimizacion 1 ->validar id
        // optimizacion 2
        if(result.affectedRows === 0){
            res.status(404).json({
                message: `No se encontro producto con id ${id}`
            });
        }
        return res.status(200).json({
            message:  `producto con id ${id} eliminado correctamente`
        })

    } catch(error){
        console.log(`error al eliminar el producto con id ${id}`, error);
        res.status(500).json({
            message: `error al eliminar el producto con id ${id}`, error: error.message
        })

    }
};