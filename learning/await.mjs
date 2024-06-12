import { readFile } from "node:fs/promises" //<---- importa la funcion readFile de fs(FileSystem).

const  text = await readFile('./archivo.txt','utf-8')//<---- 1er parametro es directorio y 2do es el formato.

console.log(text)
console.log(typeof text)//<---- typeof determina que tipo de dato es algo.

//await ----> Espera y ejecuta de manera asincrona, await es una palabra clave para esperar una promesa

//readFile ----> Lee el texto de un archivo.

/*uft-8 ----> Es el formato de codificación para que podamos entender los datos en este caso uft-8 
admite comas y otros caracteres.*/

/*NOTA: usar await permite que aunque el codigo sea asincrono se realize de manera secuencial es decir
primero termina una operacion para que siga la otra.*/