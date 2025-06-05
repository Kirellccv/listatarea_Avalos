const db = require('../config/db');

exports.obtenerTareas = (req, res) => {
  db.query('SELECT * FROM tareas', (err, resultados) => {
    if (err) return res.status(500).json({ error: err });
    res.json(resultados);
  });
};

exports.crearTarea = (req, res) => {
  const { descripcion, estado } = req.body;
  const fecha = new Date();
  db.query(
    'INSERT INTO tareas (descripcion, estado, fecha_creacion, fecha_actualizacion) VALUES (?, ?, ?, ?)',
    [descripcion, estado, fecha, fecha],
    (err, resultado) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: resultado.insertId, mensaje: 'Tarea creada' });
    }
  );
};

exports.actualizarTarea = (req, res) => {
  const { id } = req.params;
  const { descripcion, estado } = req.body;
  const fecha = new Date();
  db.query(
    'UPDATE tareas SET descripcion = ?, estado = ?, fecha_actualizacion = ? WHERE id = ?',
    [descripcion, estado, fecha, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ mensaje: 'Tarea actualizada' });
    }
  );
};

exports.eliminarTarea = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM tareas WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Tarea eliminada' });
  });
};
