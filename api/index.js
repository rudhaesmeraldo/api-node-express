const express = require('express');
const app = express();

const usuarios = [
  { nome: 'Francisca da Luz', cidade: 'Pacoti' },
  { nome: 'João de Deus', cidade: 'Granja' },
  { nome: 'Maria Aparecida', cidade: 'Viçosa do Ceará' },
  { nome: 'José Raimundo', cidade: 'Cariré' },
  { nome: 'Ana Cláudia', cidade: 'Guaraciaba do Norte' },
  { nome: 'Pedro Henrique', cidade: 'Moraújo' },
  { nome: 'Luzia Ferreira', cidade: 'Caridade' },
  { nome: 'Antônio Carlos', cidade: 'Paramoti' },
  { nome: 'Raimunda Silva', cidade: 'Massapê' },
  { nome: 'Carlos Eduardo', cidade: 'Palhano' }
];

app.get('/api/usuario/todos', (req, res) => {
  res.json(usuarios);
});

app.get('/api/usuario/cidade/:cidade', (req, res) => {
  const cidadeParam = req.params.cidade.toLowerCase();
  const filtrados = usuarios.filter(u => u.cidade.toLowerCase() === cidadeParam);
  res.json(filtrados);
});

app.get('/api/usuario/sorteado', (req, res) => {
  const indice = Math.floor(Math.random() * usuarios.length);
  res.json(usuarios[indice]);
});

module.exports = app;
