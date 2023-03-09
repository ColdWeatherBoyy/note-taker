// basic set up
const express  = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;


// middleware for parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware for static content
app.use(express.static('public'));

// middleware for routing
app.use(routes);


// listener for PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);