// dependencies for notes API
const notesAPI = require('express').Router();
const fs = require('fs');
const dbData = require('../db/db.json')
const uuid = require('../helpers/uuid')

// get request for notesAPI that returns concents of db.json as JSON
notesAPI.get('/api/notes', (req, res) => {
  console.info(`${req.method} request received for notes/api`);
  
  // returns db.JSON as JSON
  res.json(dbData);
});

// post request for notes API
notesAPI.post('/api/notes', (req, res) =>{
  console.info(`${req.method} request received for notes/api`);

  // destructure request body
  const { title, text } = req.body

  // if statement for request contains proper parameters
  if (title && text) {

    const newNote = {
      title,
      text,
      id: uuid(),
    }

    // adds new note to existing data base array
    dbData.push(newNote);
    // stringifies the dbData to rewrite file
    const updatedNotes = JSON.stringify(dbData , null, 2);

    // overwrites file with new notes including submitted one
    fs.writeFile('./db/db.json', updatedNotes , (err) =>
      // should probably throw an error here if it fails
      err ? console.error(err) : console.info(`Review for ${newNote.title} has been added`)
    )

    // response object containing newNote
    const response = {
      status: 'success',
      body: newNote
    }

    // response sent if successfully executed
    res.status(201).json(response);
  } else {
    // yes I know I should use a different error code (probably 400)
    res.status(418).json('Teapots need to have a title or text to be submitted')
  }
});

// delete request from click on delete of list items
notesAPI.delete('/api/notes/:id', (req, res) => {
  // defining id as the request parameters id which is grabbed in the handleNoteDelete function
  const id = req.params.id

  // finds index of object to remove
  const noteIndex = dbData.findIndex(specificNote => specificNote.id === id);
  
  // removing that specified index
  dbData.splice(noteIndex, 1);

  // write file with updated, stringified dbData
  fs.writeFile('./db/db.json', JSON.stringify(dbData, null, 2), (err) =>
      // should probably throw an error here if it fails
    err ? console.error(err) : console.info(`Note with id ${id} deleted.`)
  )
  
  return res.status(204).json('Successfully deleted note')
})

module.exports = notesAPI;