// dependencies for html gets
const getRequest = require('express').Router();
const path = require('path');

// getRequest for notes.html
getRequest.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes.html`);
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// getRequest for index.html
getRequest.get('*', (req, res) => {
  console.info(`${req.method} request received for index.html`);
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = getRequest;
