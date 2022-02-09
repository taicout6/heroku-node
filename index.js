require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('Vamo que vamo Trybee');
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});