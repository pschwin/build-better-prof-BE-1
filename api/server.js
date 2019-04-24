const express = require ('express');
const server = express();
const projectRouter = require('../data/routers/project-router.js');
const studentRouter = require('../data/routers/student-router.js');

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/students', studentRouter);

server.get('/', (req,res, next) => {
    res.send(`<h2>Server is Working</h2>`)
})

module.exports = server;