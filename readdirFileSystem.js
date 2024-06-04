const fs = require('node:fs')

fs.readdir('.',(err,files)=>{ //<---- usa el dir de la terminal 
    if(err){
        console.error('Error al leer el directorio: ',err)
        return;
    }

    files.forEach(file => {
        console.log(file)
    })
})

fs.statSync('./archivo.txt') //<---- Con esto verificamos si un archivo existe


