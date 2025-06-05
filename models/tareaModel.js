class Tarea {
  constructor(id, descripcion, estado, fecha_creacion, fecha_actualizacion) {
    this.id = id;
    this.descripcion = descripcion;
    this.estado = estado;
    this.fecha_creacion = fecha_creacion;
    this.fecha_actualizacion = fecha_actualizacion;
  }
}

module.exports = Tarea;
