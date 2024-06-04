const path = require('node:path')


console.log(path.sep) //<---- indica con que barra se buscan archivos en tu SO(Sistema operativo)

const filePath = path.join('node.js','archivo.txt') //<---- indica la ruta del archivo
console.log(filePath)

const basePath = path.basename('/node.js/archivo.txt') //<---- indica el nombre del archivo
console.log(basePath)

const basePathSE = path.basename('/node.js/archivo.txt', '.txt') //<---- indica el nombre del archivo pero quitandole la extención 
console.log(basePathSE)

const extension = path.extname('/node.js/archivo.txt') //<---- indica la extención del archivo 
console.log(extension)