const fs = require('node:fs') //<---- Utiliza callback

fs.readdir('.', (err, files) => { //<---- Lee el contenido del directorio actual ('.') y maneja el resultado en la función de callback.
    if (err) { //<---- Verifica si hubo un error al intentar leer el directorio.
        console.error('Error al leer el directorio: ', err) //<---- Muestra un mensaje de error en la consola si se produce un error.
        return; //<---- Detiene la ejecución de la función si hay un error.
    }

    files.forEach(file => { //<---- Itera sobre cada archivo o carpeta en la lista 'files'.
        console.log(file) //<---- Muestra el nombre de cada archivo o carpeta en la consola.
    })
})


