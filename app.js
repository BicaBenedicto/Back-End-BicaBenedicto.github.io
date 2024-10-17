const express = require('express');

const technologiesRouter = require('./routes/technologies.routes');
const projectsRouter = require('./routes/projects.routes');
const loginRouter = require('./routes/login.routes');
const viewRouter = require('./routes/view.routes');
const errorsMiddleware = require('./errors');
const cors = require('cors');

const corsOptions = {
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
    optionsSuccessStatus: 200,
};

const app = express();
const port = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(express.json());

app.use('/login', loginRouter);
app.use('/view', viewRouter);
app.use('/technologies', technologiesRouter);
app.use('/projects', projectsRouter);

app.use('/message', (req, res) => {
    console.log(req.body, 'BODY', '/message')

    return res.send('OKAY')
})
app.use('/notification', (req, res) => {
    console.log(req.body, 'BODY', '/notification')

    return res.send('OKAY')
})

app.use(errorsMiddleware);

app.listen(port, () => {console.log(`Servidor online na porta ${port}`)});
