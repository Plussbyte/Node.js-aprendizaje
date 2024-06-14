const fileSystem = require('node:fs') // <---- Importa el modulo fs(FileSystem).

const stats = fileSystem.statSync('./archivo.txt') /* <---- Le asigna a una variable el metodo statSync y
                                                            el parametro es el directorio. */

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size
)

// stat es un metodo el cual se utiliza para saber informacion de los archivos y directorios.

// stat que se puede saber EJ:tamaño, fechas de modificacíon, tipo (arhivo, directorio, etc.).

// stat puede ser de manera asincrona con [statAsync] o de manera sincrona con [Sync].
