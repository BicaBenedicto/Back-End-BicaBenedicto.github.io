const express = require('express');

const technologiesRouter = require('./routes/technologies.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('technologies', technologiesRouter);

app.listen(port, () => console.log(`Servidor online na porta ${port}`));
