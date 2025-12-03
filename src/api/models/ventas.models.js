import connection from "../database/db.js";


/// HOLA SOY SANTIAGO
/// INSERTO VENTA EN TABLA VENTAS
const insertarVenta = (nombre_usuario, monto_total) => {
    const sql = `
    INSERT INTO ventas (nombre_usuario,fecha, monto_total)
    VALUES (?, NOW(), ?)
    `;
    return connection.query(sql, [nombre_usuario, monto_total]);
};

/// INSERTO EL DETALLE EN LA VENTA DE VENTAS_PRODUCTOS
const insertarDetallesVenta = (valores) => {
    const sql = `
        INSERT INTO ventas_productos (id_venta, id_producto)
        VALUES ?
    `;
    
    return connection.query(sql, [valores]);
};

const obtenerTodasVentas = () => {
    // HOLA SOY SANTIAGO TRAIGO TODAS LAS VENTAS ORDENADAS POR FECHA DESCENDENTE, LUJITOS
    const sql = `SELECT * FROM ventas ORDER BY fecha DESC`;
    return connection.query(sql);
};

export default {
    
    insertarVenta,
    insertarDetallesVenta,
    obtenerTodasVentas
};
