import ventasModels from "../models/ventas.models.js";

/// CREO LA VARIABLE CREAR VENTA VA A MANEJAR LA LOGICA DE LA VENTA INSERTANDO TANTO EN TABLA VENTAS COMO EN VENTAS PRODUCTOS
export const crearVenta = async (req, res) => {
    try {
        // HOLA SOY SANTIAGO OBTENGO EL CUERPO COMPLETO DE LA SOLICITUD
        const { nombre_usuario, monto_total, carrito } = req.body; 

        if (!nombre_usuario || typeof monto_total !== 'number' || monto_total <= 0 || !Array.isArray(carrito) || carrito.length === 0) {
             return res.status(400).json({
                message: "DATOS DE VENTA INVÁLIDOS. FALTA INFORMACIÓN REQUERIDA."
            });
        }
        
        // PRIMERO REGISTRAR VENTA PRINCIPAL (TABLA 'VENTAS') ---
        let [ventaResult] = await ventasModels.insertarVenta(nombre_usuario, monto_total);
        const id_venta_generado = ventaResult.insertId; 
        

        // HOLA SOY SANTIAGO PREPARO LOS DATOS DEL CARRITO PARA VINCULAR SOLO LOS IDs
        // CREO UN ARRAY DE ARRAYS: [ID_VENTA, ID_PRODUCTO]
        // USAMOS UN BUCLE PARA CONSIDERAR LA CANTIDAD: SI SE COMPRARON 2 PRODUCTOS,        
        const detallesValores = [];
        
        // HOLA SOY SANTIAGO ITERAMOS SOBRE EL CARRITO PARA OBTENER EL ID DEL PRODUCTO
        carrito.forEach(item => {
            // REGISTRAMOS CADA UNIDAD COMO UNA VINCULACIÓN SEPARADA
            // SI CANTIDAD ES 3, ESTE BUCLE SE EJECUTA 3 VECES
            for (let i = 0; i < item.cantidad; i++) {
                detallesValores.push([
                    id_venta_generado,  // ID DE LA VENTA
                    item.id             // ID DEL PRODUCTO
                ]);
            }
        });

        // HOLA SOY SANTIAGO REGISTRO TODAS LAS RELACIONES EN LA TABLA PIVOTE
        await ventasModels.insertarDetallesVenta(detallesValores);

        //  FIN DEL PROCESO DE REGISTRO 
        
        console.log(`VENTA REGISTRADA (ID: ${id_venta_generado}) CON ${detallesValores.length} RELACIONES CREADAS.`); 

        // HMENSAJE DE ÉXITO AL CLIENTE
        res.status(201).json({
            message: "VENTA Y RELACIONES REGISTRADAS CON ÉXITO",
            ventaId: id_venta_generado, 
            total: monto_total
        });

    } catch (error) {
        //MENSAJE DE ERROR AL CLIENTE
        console.error("ERROR EN CREAR VENTA (SOLO RELACIONES):", error);
        
        res.status(500).json({
            message: "ERROR INTERNO DEL SERVIDOR AL REGISTRAR LA VENTA",
            error: error.message
        });
    }
};