const fs = require('node:fs/promises') //<---- trabajamos con promesas.

const folder = process.argv[2] ?? '.'

async function ls(folder){
    let files
    try{
        const files = await fs.readdir(folder)  
    } catch {
        console.error(`No se pudo leer el directorio ${folder}`)
        process.exit(1)
    }

    const filesPromises = files.map(async file=>{
        const filePath = path.join(folder,file)
        try {
            const fileStats = await fs.stat(filePath)
        } catch{
            
        }
    })
}
ls(folder)