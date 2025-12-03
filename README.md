# 🕹️🎮 BackEnd - Sistema de autoservicio - "JoyStiq" 

## 📌 Descripción

Este repositorio contiene el servidor backend de nuestro autoservicio de Juegos y Consolas.
Incluye la API REST que gestiona productos, usuarios, ventas y otros recursos.


## ⚙️ Dependencias utilizadas
```json
{
    "bcrypt": "^6.0.0",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "ejs": "^3.1.10",
    "exceljs": "^4.4.0",
    "express": "^5.1.0",
    "express-session": "^1.18.2",
    "mysql2": "^3.15.3",
    "nodemon": "^3.1.11",
    "tree-structure": "^0.0.7"
  }
```
## 🖥️ Instalación

1. Clonar repositorio 
```bash
git clone https://github.com/canndec/grupo07Progra3ntegrador25Cuatri2_back.git
```
2. Configuración
```bash
cd backend
npm install
```
3. Crear un archivo .env en la carpeta backend
```env
PORT=3500
DB_HOST="localhost"
DB_NAME="trabajointegrador"
DB_USER="usuario"
DB_PASSWORD=contraseña
SESSION_KEY="tu_clave_mas_segura"
```
4. Crear Base de Datos
```sql
CREATE DATABASE trabajointegrador;
- Insertar el script "trabajointegrador.sql"
```
4. Iniciar Servidor
```
cd backend
npm run dev
```
* Servidor corriendo en el puerto 3500
 http://localhost:3500
 Ingresar con el usuario de "Acceso Rapido"

## 🔎 Funcionalidades

👤 **Panel de administrador**: Ingresar con un email y contraseña

🗃️ **Pantalla Dashboard**: Presentacion de productos, menu desplegable de opciones, Cerrar sesion 

📖 **Menu desplegable**

- **Consultar producto**: GET - Consultar mediante ID
- **Modificar producto**: PUT - Modificar cualquier campo del producto mediante ID 
- **Crear producto**: POST - Crear un nuevo producto 
- **Eliminar producto**: DELETE - Eliminar mediante ID
- **Descargar Excel de ventas**: EXCELJS - Archivo Excel con todas las ventas hasta el momento

🌓 **Modo oscuro**: Accediendo de cualquier pantalla

## 👨‍💻 👩‍💻 Equipo de proyecto
**Santiago Baez y  Candela Corral**