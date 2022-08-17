const express = require('express');
const apiRoutes = express.Router();

const notesRouter = require('./apiRoutes');


apiRoutes.use('/notes', notesRouter);


module.exports = notes;