// Import router from express
const Router = require("express").Router();

// Import needed modules
const htmlGets = require('./htmlgets');
const notesAPI = require('./notesapi')


// TODO: Use our routes
Router.use(htmlGets);
Router.use(notesAPI);


// TODO: Export app
module.exports = Router;