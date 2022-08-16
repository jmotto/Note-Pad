const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req,res) => {
    fs.readFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
});

router.post('/notes', (req,res) => {
   
})