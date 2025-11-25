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

const insertarProducto = (nombre, categoria, imagen, precio) => {
    let sql = `INSERT INTO productos (nombre, precio, imagen, categoria) VALUES (?, ?, ?, ?)`;
    return connection.query(sql, [nombre, precio, imagen, categoria]);
};

const actualizarProducto = (nombre, precio, imagen, categoria, id) => {
    let sql = `
            UPDATE productos
            SET nombre = ?, precio = ?, imagen = ?, categoria = ? 
            WHERE id = ? `;
        
    return connection.query(sql, [nombre, precio, imagen, categoria, id]);
};

const eliminarProducto = (id) => {
    let sql = "DELETE FROM productos WHERE id = ?";
    return connection.query(sql,[id]);
};


export default {
    seleccionarTodosProductos,
    seleccionarProductosPorId,
    insertarProducto,
    actualizarProducto,
    eliminarProducto
}