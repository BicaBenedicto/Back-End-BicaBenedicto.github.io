// arquivo/index.js

const express = require('express');

const { Project } = require('./models');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/projects', async (req, res) => {

  const { name, description, site, rep } = req.body;

  const project = await Project.create({ name, description, site, rep });

  return res.status(201).json(project);
});

app.listen(port, () => console.log(`Servidor online na porta ${port}`));
