import { platform, release} from 'node:os' // ES modulo por modulo

import os from 'node:os' // ES Todos los modulos

console.log('Informacion')
console.log('1- Nombre del sistema operativo', platform())
console.log('2- Version del sistema operativo', release())
console.log('3- Tiempo en que esta el PC encendido', os.uptime() / 60 / 60)