const express = require ('express');
const server = express();
const projectRouter = require('../data/routers/project-router.js');
const studentRouter = require('../data/routers/student-router.js');
const reminderRouter = require('../data/routers/reminder-router.js');
const userRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');

server.use(express.json());
server.use('/api/projects',  projectRouter);
server.use('/api/students', studentRouter);
server.use('/api/reminders', reminderRouter);
server.use('/api/users', userRouter);
server.use('/api/auth', authRouter);
//server.use('/api/registration', userRouter);

server.get('/', (req,res, next) => {
    res.send(`<h2>Server is Working</h2>`)
})

module.exports = server;