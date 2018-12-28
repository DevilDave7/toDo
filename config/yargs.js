let descripcion = {
        demand: true,
        alias: "d",
        desc: "Descripcion de la tarea por hacer"
    }
let completado = {
    alias: 'c',
    default: true,
    desc: "Marca comp completado o pendiente la tarea"
}


const argv = require("yargs")
    .command('crear','Agrega una nueva cosa por hacer',{descripcion})
    .command('listar',`Lista las cosas por hacer`,{completado})
    .command('eliminar','Elimina la tarea especificada',{descripcion})
    .command('actualizar','Modifica la actividad que se especifica',{descripcion,completado})
    .help()
    .argv;

module.exports = {
    argv
}