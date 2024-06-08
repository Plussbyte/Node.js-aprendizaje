const fs = require('node:fs/promises') //<---- trabajamos con promesas.

const folder = process.argv[2] ?? '.'

fs.readdir(folder) 
    .then(files =>{ //<---- files es el parametro de la carpeta en este caso la actual (Lista de nombres de archivos y carperas).
        files.forEach(element => { //<---- Se itera cada uno de los elementos (arhivo o carpeta) que tiene files(Carpeta actual).
          console.log(element)  //<---- y se le dice que con cada elemento que tiene la capeta actual lo muestre por consola.
        })
    })
    .catch(err =>{ //<---- 'catch' captura cualquier error que ocurra en la promesa
        if(err){ //<---- Verifica si un error existe.
            console.error('Error al leer archivos del directorio actual ', err) //<---- muestra el error por consola
            return; // <---- Finaliza la ejecución del código
        }
    })

//NOTA: En la consola se pueden buscar archivos dentro de carpetas Ejemplo: node promiseFSAdvanced.js '.\Export e Import\'