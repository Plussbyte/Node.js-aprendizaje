import { readFile } from "node:fs/promises" // ES asincrono secuencial (promesa por promesa)

const text = await readFile('./archivo2.txt','utf-8') //<------ Async await
console.log('Texto con Async await','\n',text)