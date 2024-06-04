const modules = require('node:os') // commonJS

console.log('Informacion')

console.log('1- Nombre del sistema operativo', modules.platform())
console.log('2- Version del sistema operativo', modules.release())
console.log('3- Tiempo en que esta el PC encendido', modules.uptime() / 60 / 60)