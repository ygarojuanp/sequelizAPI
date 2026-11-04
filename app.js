const express = require('express');
const usuarioRoutes = require('./routes/usuarioroutes.js');
require('dotenv').config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ status: 'ok' });
});

app.use('/usuarios', usuarioRoutes);

app.listen(port, () => {
  console.log(`Servidor executando em: http://localhost:${port}`);
});

module.exports = app;