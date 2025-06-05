const express = require('express');
const bodyParser = require('body-parser');
const tareaRoutes = require('./routes/tareaRoutes');
require('./config/db'); // conectar base de datos

const app = express();
app.use(bodyParser.json());

app.use('/api', tareaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
