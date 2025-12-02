import { insertarUsuario, buscarUsuarioPorNombre } from "../models/user.models.js"; /// Hola soy santiago aca importo las funciones del modelo user.models.js

export async function crearUsuarioSinPassword (req, res) {  /// Hola soy santiago este controlador crea un usuario sin password lo auto pone como que no es admin
  try {
    const { nombre, es_admin } = req.body;

    if (!nombre || nombre.trim().length < 3) {
      return res.status(400).json({ message: "Nombre inválido" }); /// Hola soy santiago valido que el nombre exista y tenga al menos 3 caracteres
    }

    const nombreTrim = nombre.trim();
    const existentes = await buscarUsuarioPorNombre(nombreTrim); /// Hola soy santiago busco si ya existe un usuario con ese nombre

    if (existentes.length > 0) {  // Hola soy santiago si ya existe el usuario le aviso al cliente que ya existe
      return res.status(200).json({
        message: "Usuario ya existe",
        id: existentes[0].id,
        nombre: existentes[0].nombre,
        es_admin: existentes[0].es_admin  /// Hola soy santiago le devuelvo los datos del usuario existente
      });  
    }
  
const result = await insertarUsuario(nombreTrim, es_admin ?? 0);  /// Hola soy santiago inserto el nuevo usuario con el nombre y si es admin o no (por defecto no es admin)

    return res.status(201).json({
      message: "Usuario creado",
      id: result.insertId,
      nombre: nombreTrim,
      es_admin: es_admin ?? 0
    });
  } catch (error) {
    console.error("Error crearUsuarioSinPassword:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}