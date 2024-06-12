const modules = require('node:os') // <---- Importa el modulo os

console.log('Informacion')

console.log('1- Nombre del sistema operativo', modules.platform())
console.log('2- Version del sistema operativo', modules.release())
console.log('3- Tiempo en que esta el PC encendido', modules.uptime() / 60 / 60)

// os es un modulo el cual tiene muchos metodos los cuales permiten interactuar con el sistema operativo