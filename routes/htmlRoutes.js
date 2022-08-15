const path = require('path');

const htmlRouter = require('express').Router();

// GET route for sending notes to notes.html file
htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// GET route for sending to the index.html file
htmlRouter.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = htmlRouter;