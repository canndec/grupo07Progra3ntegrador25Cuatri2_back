import dotenv from "dotenv"; //modulo dotenv
dotenv.config(); //carga el entorno desde .env

export default {
    port: process.env.PORT || 3500,
    database : {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME, //ya peude acceder al .env
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    },
    session_key: process.env.SESSION_KEY
}
