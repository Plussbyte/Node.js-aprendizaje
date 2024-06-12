const fs = require('node:fs/promises')
const archivo1 = './archivo.txt'
const archivo2 = './archivo2.txt'

//await

async function texto(file){
    const text = await fs.readFile(file,'utf-8')
    if(text === 'Hola mundo'){
        console.log(true)
    } else {
        console.log(false)
    }
}

texto(archivo1)

