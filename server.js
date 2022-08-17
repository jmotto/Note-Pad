const express = require('express');
const path = require('path');

const apiRoutes = require('./routes');
// const htmlRoutes = require('./routes/htmlRoutes');

// initialize 'app' with express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// setup api routes
app.use('/api', apiRoutes);

// GET /notes should return the notes.html file
app.get('/notes', (req,res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET * should return the index.html file
app.get('*', (req,res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))  
);

// Use 'app' to listen to a specific PORT
app.listen(PORT, () =>
  console.log(`Server Up! Listening to ${PORT}`)
);
