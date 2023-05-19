const {readFileSync,writeFileSync} = require('fs'); //EL READFILESYNC ES PARA LEER EL JSON Y EL WRITEFILESYNC ES PARA ESCRIBIR EL JSON
const path = require('path'); // El metodo path crea rutas

module.exports = {
    leerJSON : () => JSON.parse(readFileSync(path.join(__dirname,'tareas.json'),'utf-8')),
    escribirJSON : (tareas) => writeFileSync((path.join(__dirname,'tareas.json')),JSON.stringify(tareas,null,2),'utf-8')
}

//DATA INDEX SE ENCARGA DE LEER EL JSON. Aquí va la lógica que se comunica con el archivo JSON