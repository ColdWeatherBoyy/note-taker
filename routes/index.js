// Import router from express
const Router = require("express").Router();

// Import needed modules
const htmlGets = require('./htmlgets');
const notesAPI = require('./notesapi')


// Use our routes
Router.use(notesAPI);
Router.use(htmlGets);


// Export app
module.exports = Router;