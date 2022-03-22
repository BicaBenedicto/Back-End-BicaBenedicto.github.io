const express = require('express');

const technologiesRouter = require('./routes/technologies.routes');
const projectsRouter = require('./routes/projects.routes');
const loginRouter = require('./routes/login.routes');
const errorsMiddleware = require('./errors');
const cors = require('cors');

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/login', cors(corsOptions), loginRouter);
app.use('/technologies', cors(corsOptions), technologiesRouter);
app.use('/projects', cors(corsOptions), projectsRouter);

app.use(errorsMiddleware);

app.listen(port, () => console.log(`Servidor online na porta ${port}`));
