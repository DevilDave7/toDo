const fs = require('fs');

let listadoXhacer = [];

let guardarDB = () =>{
    let data = JSON.stringify(listadoXhacer);

    fs.writeFile('db/data.json',data,err=>{
        if(err) throw new Error("Algo fallo".red,err);
    })  
}

let cargarDB = () =>{
    try {
        listadoXhacer = require('../db/data.json');
    } catch (error) {
        listadoXhacer = [];
    }
}

const crear = descripcion =>{
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false,
    }

    listadoXhacer.push(porHacer);
    guardarDB();
    return porHacer;
}

let getListado = (completado = `true`) =>{
    cargarDB();
    return listadoXhacer.filter(el => `${el.completado}` == `${completado}`);
}

let actualizar = (descripcion,completado=true) => {
    cargarDB();

    let index = listadoXhacer.findIndex( tarea => tarea.descripcion === descripcion );

    if(index >= 0){
        listadoXhacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

let borrar = (descripcion)=>{
    cargarDB();
    let array = listadoXhacer.filter(el => el.descripcion !== descripcion);

    if(array.length < listadoXhacer.length){
        listadoXhacer = array;
        guardarDB();
        return true;
    }else{
        return false;
    }

    
}

module.exports = {
    crear,getListado, actualizar,borrar
}