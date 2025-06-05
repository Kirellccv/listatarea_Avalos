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