console.log(process.argv,"\n") //<---- Argumentos de entrada (HAY QUE ESCRIBIR LOS ARGUMENTOS EN LA TERMINAL)

/*process.exit() /*<---- Controla el proceso si le damos 0 es que todo aha ido bien 
                si le damos 1 es que hubo un error y hay que terminal el proceso si o si cierra el proceso*/

process.on('exit',()=>{ //<---- Podemos controlar eventos del proceso como limpiar recursos
    //limpiar recursos
})

console.log(process.cwd()) //<---- Dice desde que donde se esta ejecutando el archivo,( EL FICHERO DONDE SE INICIALIZA )

console.log(process.env.variableCualquiera) //<---- Variable de entorno, en la terminal 
                                            //NOTA:si es en linux variableCualquiera=hola y ejecutas node
                                            //NOTA:si es en cmd set variableCualquiera=hola && y ejecutas node
                                            //NOTA:si es en PowerShell $env:variableCualquiera = "Hola"; y ejecutas node