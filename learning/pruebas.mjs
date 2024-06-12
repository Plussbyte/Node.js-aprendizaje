import fs from 'node:fs/promises'
const archivo1 = './archivo.txt'
const archivo2 = './archivo2.txt'

//await

const text = await fs.readFile(archivo2,'utf-8')

function awaitRF(){
    let array = text.split(/\r?\n/)
    console.log(array)
}

awaitRF()