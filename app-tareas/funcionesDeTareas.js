const {leerJSON} = require('../data') //readFileSync
const Tarea = require("./Tarea");
const {escribirJSON} = require('../data') //writeFileSync

module.exports = {
    tareas : leerJSON(),
    listarTareas : function(encabezado = "LISTADO DE TAREAS", tareas = this.tareas){
        console.log(`\n******************* ${encabezado} *******************\n`.gray);
        tareas.forEach((tarea, i) => {
            console.log(`TAREA ${i+1} :${tarea.titulo} - ${tarea.estado === "pendiente" ? tarea.estado.red : tarea.estado === "en proceso" ? tarea.estado.yellow : tarea.estado.green}`)
        });
    },
    guardarTarea : function(titulo){
        const tareas = this.tareas;
        let tarea = new Tarea(titulo); // hago una instancia de mi modelo por lo tanto le paso los datos que este modelo necesita en este caso titulo 
        tareas.push(tarea);
        escribirJSON(tareas);
        return `La tarea ${tarea.titulo} se agregó exitosamente.`
    },
    filtrarPorEstado: function(estado){
        const tareasFiltradas = this.tareas.filter(tarea => tarea.estado === estado);
        if(!tareasFiltradas.length){ //"si no tiene elementos", en este caso corta la ejecucion
            return console.log("No hay tareas con el estado: " + estado.green);
        }
        this.listarTareas("TAREAS FILTRADAS", tareasFiltradas);
    },
    mensajeError : function(mensaje){
        return `ERROR: ${mensaje}`.red;
    }
}