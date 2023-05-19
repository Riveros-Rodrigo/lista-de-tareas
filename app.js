const {argv} = require('process')
require('colors') // requiero los colores del node
const moduloTareas = require("./app-tareas/funcionesDeTareas");
const {mensajeError} = require("./app-tareas/funcionesDeTareas")
let respuesta;

switch (argv[2]) {
    case "listar":
        moduloTareas.listarTareas()
        break;
    case "crear":
        if(!argv[3]){
            console.log(mensajeError("El titulo de la tarea es obligatorio".red));
            break;
        }
        respuesta = moduloTareas.guardarTarea(argv[3]) //titulo en la posicion 3 
        console.log(respuesta);
        break;
    case "filtrar":
        const estados = ["pendiente", "en proceso", "terminado"]
        if(!argv[3]){
            console.log(mensajeError("Debes indicar el estado que deseas filtrar"));
            break;
        }
        if(!estados.includes(argv[3].toLowerCase())){
            console.log(mensajeError("El estado debe ser uno de los siguientes pendiente | en proceso | terminado"));
            break;
        }
        moduloTareas.filtrarPorEstado(argv[3].toLowerCase()) //tolowercase pasa todo el string a minuscula
        break;
    default:
        break;
}