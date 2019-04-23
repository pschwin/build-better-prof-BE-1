    
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const projectsRouter = require('../projects/projects-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;