USE listatarea_db; //cambiar a esa base de datos
SHOW TABLES; //mostrar tablas dentro esa base
DESCRIBE tareas; //mostrar estructura tablas
SELECT * FROM tareas; //mostrar datos guardados


dependencias->
npm init -y
npm install express mysql2 body-parser

"scripts": {
  "start": "node app.js"
},

CREATE DATABASE IF NOT EXISTS listatarea_db;
USE listatarea_db;

CREATE TABLE tareas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(255),
  estado VARCHAR(50),
  fecha_creacion DATETIME,
  fecha_actualizacion DATETIME
);
