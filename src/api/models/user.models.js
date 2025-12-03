import connection from "../database/db.js";

//inserta un usuario Admin 
const insertarUsuarioAdmin = (nombre,email,contrasenia, es_admin = 1) =>{ //, 
    const sql = `
        INSERT INTO usuarios (nombre, email, contrasenia, es_admin) 
        VALUES (?, ?, ?, ?)
    `; 
    return connection.query(sql, [nombre, email,contrasenia, es_admin]); 
}

export async function insertarUsuario(nombre, es_admin = 0) { /// Hola soy santiago esta funcion inserta un usuario en la base de datos
    const sql = `
        INSERT INTO usuarios (nombre, email, contrasenia, es_admin)
        VALUES (?, NULL, NULL, ?)
    `;
    // Usar NULL en lugar de ""
    const [result] = await connection.query(sql, [nombre, es_admin]); 
    return result; 
}
export async function buscarUsuarioPorNombre(nombre) { /// Hola soy santiago esta funcion busca un usuario por su nombre en la base de datos
    const sql = "SELECT * FROM usuarios WHERE nombre = ?";
    const [rows] = await connection.query(sql, [nombre]);
    return rows;
}
export async function buscarEmail(email){
    const sql = "SELECT * FROM usuarios where email = ?";
    return connection.query(sql,[email]);
}

export default {
    insertarUsuarioAdmin,
    insertarUsuario,
    buscarUsuarioPorNombre,
    buscarEmail
}