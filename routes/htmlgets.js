const getRequest = require('express').Router();
const path = require('path');

// getRequest for index.html
getRequest.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/assets/index.html'))
)

// getRequest for notes.html
getRequest.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/assets/notes.html'))
)

module.exports = getRequest;