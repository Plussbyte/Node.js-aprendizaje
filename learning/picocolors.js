const fs = require('node:fs/promises')
const pc = require('picocolors')

async function leer () {
  const read = await fs.readFile('./archivo.txt', 'utf-8')
  console.log(pc.green('lectura del archivo: '), pc.yellow(read))
}

leer()
