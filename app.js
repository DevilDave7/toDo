const colors = require("colors");
const argv = require("./config/yargs").argv;
const { crear, getListado, actualizar, borrar } = require("./tareas/por-hacer");

let command = argv._[0];

switch(command){
    case 'crear':
        console.log(crear(argv.descripcion));   
    break;
    case 'listar':
        let listado = getListado(argv.completado);
        if(argv.completado  == `false`)
        console.log(`*********Lista de cosas por hacer *********`.green)
        else console.log(`*********Lista de cosas realizadas *********`.green)
        for(let tarea of listado){
            console.log(`=============================================`.yellow);
            console.log(`Descripcion: ${tarea.descripcion}`);
            console.log(`Completado?: ${tarea.completado? 'Si' : 'No'}`);
            console.log(`=============================================`.yellow);
            
            
        }
    break;
    case 'actualizar':
        if(actualizar(argv.descripcion,argv.completado)){
            console.log('La tarea a actualizada'.green);
        }else{
            console.log('No se encontro la tarea'.red);
        }
    break;
    case 'eliminar':
        if(borrar(argv.descripcion))
            console.log('Se borro correctamente'.green)
        else
            console.log('Hubo un problema al eliminar'.red)
        
    break;
    default:
        console.log('No se reconoce el comando'.red)
}