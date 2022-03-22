const express = require('express');

const technologiesRouter = require('./routes/technologies.routes');
const projectsRouter = require('./routes/projects.routes');
const loginRouter = require('./routes/login.routes');
const errorsMiddleware = require('./errors');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET, PUT, POST, DELETE',
    optionsSuccessStatus: 200,
};

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/login', cors(corsOptions), loginRouter);
app.use('/technologies', cors(corsOptions), technologiesRouter);
app.use('/projects', cors(corsOptions), projectsRouter);

app.use(errorsMiddleware);

app.listen(port, () => console.log(`Servidor online na porta ${port}`));
