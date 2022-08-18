// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

// initialize 'app' with express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));


// GET route for /notes should return the notes.html file
app.get('/notes', (req,res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for /api/notes
app.get('/api/notes', (req, res) => 
    fs.readFile('./db/db.json', "utf8", (err, data) => 
    res.json(JSON.parse(data))
    )
    
)

// POST Route for a new note -- api/notes
  
app.post('/api/notes', (req, res) => {
  console.log(req.body);

  const {title, text} = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
    };

    const db = require("./db/db.json");
    db.push(newNote);

    fs.writeFile( './db/db.json', JSON.stringify( './db/db.json', null, 4 ), error => {
      if (error) {
          console.error(error);

          res.json(error);
      } else {
          console.log( 'Note saved');
          
          const response = {
              status: "Success!",
              body: newNote,
          };
          
          res.json(response);
      }
  })
}
});

// // GET * to return the index.html file
app.get('*', (req,res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))  
);

// Use 'app' to listen to a specific PORT
app.listen(PORT, () =>
  console.log(`Server Up! Listening to ${PORT}`)
);
