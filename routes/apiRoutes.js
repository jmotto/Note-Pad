// const express = require('express');
// const fs = require('fs');
// // creates a unique id
// // const { v4: uuidv4 } = require('uuid');
// const apiRouter = express.Router();
// const db = require('../db/db.json');

// // API GET route
// apiRouter.get('/api/notes', (req,res) => 
//     readFromFile(db).then((data) => res.json(JSON.parse(data)))
//     // res.json(db);
// );

// // POST route for new note
// apiRouter.post('/api/notes', (req,res) => {

//     const { title , text } = req.body;

//     if ( title && text ) {

//         const newNote = {
//             title, 
//             text, 
//             id: uuidv4()
//         }
        
//         db.push(newNote);
    
        fs.writeFile( './db/db.json', JSON.stringify( './db/db.json', null, 4 ), error => {
            if (error) {
                console.error(error);

                res.json('Error in adding note');
            } else {
                console.log( 'Note saved');
                
                const response = {
                    status: "Success!",
                    body: newNote,
                };
                
                res.json(response);
            }
        })

//     }
    
// });

// // DELETE notes route
// // apiRouter.delete( '/:id', ( req, res) => {
// //     const id = req.params.id;

// // })



// module.exports = apiRouter; 




//     // res.json

// // `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

//     // fs.writeFile
