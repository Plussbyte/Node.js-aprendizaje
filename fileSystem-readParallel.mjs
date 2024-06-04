import { readFile } from "node:fs/promises" // Asincrono paralelo (Mas rapido)

Promise.all([
    readFile('./archivo.txt','utf-8'),
    readFile('./archivo2.txt','utf-8')
]).then(([text,text2])=>{
    console.log(t )
})