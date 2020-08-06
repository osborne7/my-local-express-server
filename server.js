// set empty object to act as endpoint for all routes
const projectData = {};

// require express to run server and routes
const express = require('express');

// start an instance of app
const app = express();

const bodyParser = require('body-parser');

/* middleware*/
// configure express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// initialize main project folder
app.use(express.static('client'));

// set up server
const port = 3015;

const server = app.listen(port, () => {
    console.log(`server running on localhost: ${port}`);
});

