
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
// require the 'db.json' file and store it in 'notes'
const JSON = require('./db/db.json');
// initialize 'app' with express
const app = express();

//Have the 'app' use appropriate middleware to parse body data
// Middleware for parsing application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET /notes should return the notes.html file

app.get('/notes', (req,res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET /api/notes should read the db.json file
app.get('/api/notes', (req,res) => {
  res.readFile('/db/db.json')
});
    // res.json

// `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

    // fs.writeFile

// GET * should return the index.html file
app.get('*', (req,res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))  
);

// Use 'app' to listen to a specific PORT
app.listen(PORT, () =>
  console.log(`Server Up! Listening to PORT`)
);
