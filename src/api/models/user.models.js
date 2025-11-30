import connection from "../database/db.js";

export async function insertarUsuario(nombre, es_admin = 0) {
    const sql = `
        INSERT INTO usuarios (nombre, email, contrasenia, es_admin)
        VALUES (?, NULL, NULL, ?)
    `;
    // Usar NULL en lugar de ""
    const [result] = await connection.query(sql, [nombre, es_admin]); 
    return result; 
}
export async function buscarUsuarioPorNombre(nombre) {
    const sql = "SELECT * FROM usuarios WHERE nombre = ?";
    const [rows] = await connection.query(sql, [nombre]);
    return rows;
}