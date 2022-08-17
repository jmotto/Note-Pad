const express = require('express');
// const api = require('express').Router();

const app = express();

const apiRouter = require('./apiRoutes');


app.use('/notes', apiRouter);


module.exports = app;