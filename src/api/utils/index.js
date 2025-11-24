//logica para trabajar con archivos y rutas del tp

//modulo para trabajar con rutas
import {fileURLToPath} from "url"; 
    //convierte una url de archivo file:// -> a una ruta de sistema de archivos

import {dirname, join} from "path"; 
    //dirname devuelve del directorio de una ruta y join unifica rutas


//obtener nombre de archivo actual
const __filename = fileURLToPath(import.meta.url); 
    //fileURLToPath:    /ruta/al/archivo.js
    //import.meta.url:  file:///ruta/al/archivo.js

//obtener el directorio del archivo actual
const __dirname = join(dirname(__filename), "../../../"); //apunta a raiz del proyecto( niveles  atras en la estructura)
    //porque el directorio del archivo actual es/home/user/proyecto/src/api/utils. solo quiero llegar a la raiz

//se exporta el directorio base calculado y la funcion "join" para construir rutas relativas
export {
    __dirname,
    join
}