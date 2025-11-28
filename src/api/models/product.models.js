//modelos productos 
import connection from "../database/db.js";

//que la variable trenga el mismo que la sentencia

//selecionar todos los productos
const seleccionarTodosProductos = () => {
    const sql =  `SELECT * FROM productos`;
    return connection.query(sql); //retorna una promesa que  se resuleve en el controlador
        
};

//seleccionar productos por id
const seleccionarProductosPorId = (id) =>{
    let sql = `SELECT * FROM productos where id = ?`; // ? placeholder
    return connection.query(sql, [id]); //solo esto   
};

const insertarProducto = (nombre, precio, imagen, categoria) => {
    let sql = `INSERT INTO productos (nombre, precio, imagen, categoria) VALUES (?, ?, ?, ?)`;
    return connection.query(sql, [nombre, precio, imagen, categoria]);
};

const actualizarProducto = (nombre, precio, imagen, categoria, activo, id) => {
    let sql = `
            UPDATE productos
            SET nombre = ?, precio = ?, imagen = ?, categoria = ?, activo = ? 
            WHERE id = ? `;
        
    return connection.query(sql, [nombre, precio, imagen, categoria, activo, id]);
};

const eliminarProducto = (id) => {
    let sql = "DELETE FROM productos WHERE id = ?";
    return connection.query(sql,[id]);
};// CREO QUE TIENE QUE SER UPDATE ACTIVO:0


// PARA VALIDACIONES-MIDDLEWARES
const buscarNombre = (nombre) => {
    let sql = "SELECT * FROM productos WHERE nombre = ?";
    return connection.query(sql,[nombre]); 
}



export default {
    seleccionarTodosProductos,
    seleccionarProductosPorId,
    insertarProducto,
    actualizarProducto,
    eliminarProducto,
    buscarNombre
}