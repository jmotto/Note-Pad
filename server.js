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


// GET /notes should return the notes.html file
app.get('/notes', (req,res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.get('/api/notes', (req, res) => 
    fs.readFile('./db/db.json', "utf8", (err, data) => 
    res.json(JSON.parse(data))
    )
)



// const api = require('./routes/htmlRoutes');
// const apiRouter = require('./routes/apiRoutes');
// // const htmlRoutes = require('./routes/htmlRoutes');
// // setup api routes
// app.use('/api', api);

// app.use('/api', apiRouter);





// // GET * should return the index.html file
app.get('*', (req,res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))  
);

// Use 'app' to listen to a specific PORT
app.listen(PORT, () =>
  console.log(`Server Up! Listening to ${PORT}`)
);
