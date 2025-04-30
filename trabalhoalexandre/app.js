const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/projectdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
