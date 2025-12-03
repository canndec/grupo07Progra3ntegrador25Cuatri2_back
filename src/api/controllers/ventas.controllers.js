import ventasModels from "../models/ventas.models.js";
import ExcelJS from 'exceljs';

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

export const exportarExcelVentas = async (req, res) => {
    try {
        // 1. Obtener datos de la base de datos
        const [rows] = await ventasModels.obtenerTodasVentas();
        
        if (rows.length === 0) {
            return res.status(404).json({ message: "No se encontraron ventas para exportar." });
        }

        // 2. Crear y configurar el libro de Excel
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Reporte de Ventas');

        // 3. Definir las columnas (Ajusta los 'key' a los nombres exactos de tus columnas SQL)
        worksheet.columns = [
            { header: 'ID Venta', key: 'id', width: 10 },
            { header: 'Cliente', key: 'nombre_usuario', width: 30 },
            { header: 'Fecha', key: 'fecha', width: 25, style: { numFmt: 'yyyy-mm-dd hh:mm:ss' } },
            { header: 'Monto Total', key: 'monto_total', width: 15, style: { numFmt: '"$"#,##0.00' } },
        ];
        
        // 4. Añadir los datos
        worksheet.addRows(rows);

        // 5. Configurar las cabeceras HTTP para forzar la DESCARGA del archivo
        res.setHeader(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );
        res.setHeader(
            'Content-Disposition',
            'attachment; filename=' + 'reporte_ventas.xlsx'
        );

        // 6. Escribir el archivo y enviarlo
        await workbook.xlsx.write(res);
        res.end(); 

    } catch (error) {
        console.error("Error al exportar Excel:", error);
        res.status(500).json({ message: "Error interno al generar el reporte." });
    }
};