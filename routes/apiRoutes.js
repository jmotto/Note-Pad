const fs = require('fs');

// API GET Request
app.get('/notes', (req,res) => {
    
    fs.readFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
});

app.post('/notes', (req,res) => {
    fs.readFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
});

module.exports = app; 