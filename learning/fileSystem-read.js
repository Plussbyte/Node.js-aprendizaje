const fs = require('node:fs') // Asincrono callback (intermedio)

console.log('Leyendo el primer archivo de manera sincrona...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')  // Sincrono (SECUENCIAL)
console.log(text)

console.log( '\nAsincronia')
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8',(err,text)=>{ // <------ ejecutas este callback
    console.log('primer texto ' + text)
})  // Asincrono (NO LINEAL - NO SECUENCIAL)

console.log('Haciendo cosas')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8',(err,text)=>{ // <------ ejecutas este callback
    console.log('segundo texto ' + text)
})  // Asincrono (NO LINEAL - NO SECUENCIAL)

console.log('Debajo esta la lectura de archivos')


// Para simplificar el codigo (PROMESAS)
const fsP = require('node:fs/promises') // <----- solicita trabajar con promesas

fsP.readFile('./archivo.txt', 'utf-8')
.then(text =>{
    console.log('1er texto con promesas',text)
})

fsP.readFile('./archivo2.txt', 'utf-8')
.then(text =>{
    console.log('2do texto con promesas',text)
})