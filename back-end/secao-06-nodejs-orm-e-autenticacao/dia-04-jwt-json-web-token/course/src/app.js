const express = require('express');
const routes = require('./routes');
const validateJWT = require('./auth/validateJWT');

const app = express();

app.use(express.json());

const apiRoutes = express.Router();

apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.post('/api/login', routes.login);
apiRoutes.use(validateJWT);
apiRoutes.get('/api/posts', routes.getPosts);
apiRoutes.get('/api/users', routes.getUsers);

app.use(apiRoutes);

module.exports = app;
