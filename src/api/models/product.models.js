//modelos productos 
import connection from "../database/db.js";

//que la variable trenga el mismo que la sentencia

//selecionar todos los productos
const selectAllProducts = () => {
    const sql =  `SELECT * FROM productos`;
    return connection.query(sql); //retorna una promesa que  se resuleve en el controlador
        
};

//seleccionar productos por id
const selectProductWhereId = (id) =>{
    let sql = `SELECT * FROM productos where id = ?`; // ? placeholder
    return connection.query(sql, [id]); //solo esto   
};

const insertProduct = (nombre, categoria, imagen, precio) => {
    let sql = `INSERT INTO productos (nombre, categoria, imagen, precio) VALUES (?, ?, ?, ?)`;
    return connection.query(sql, [nombre, categoria, imagen, precio]);
};

const updateProduct = (nombre, categoria, imagen, precio, id) => {
    let sql = `
            UPDATE productos
            SET nombre = ?, categoria = ?, imagen = ?, precio = ? 
            WHERE id = ? `;
        
    return connection.query(sql, [nombre, categoria, imagen, precio, id]);
};

const deleteProduct = (id) => {
    let sql = "DELETE FROM productos WHERE id = ?";
    return connection.query(sql,[id]);
};


export default {
    selectAllProducts,
    selectProductWhereId,
    insertProduct,
    updateProduct,
    deleteProduct
}