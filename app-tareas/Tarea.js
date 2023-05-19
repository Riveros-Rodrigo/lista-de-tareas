const Tarea = function(titulo){
    //con esto lo que hago es recibir unos datos y con esos datos crear una nueva instancia de "tareas"
    this.titulo = titulo;
    this.estado = "pendiente";
}

module.exports = Tarea;