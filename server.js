// set empty array to act as endpoint for all routes, change to object if needed
const projectData = {};

// require express to run server and routes
const express = require('express');

// start an instance of app
const app = express();

/* dependencies */
const bodyParser = require('body-parser');

/* middleware */
// configure express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors for cross-origin allowance
const cors = require('cors');
app.use(cors());

// initialize main project folder
app.use(express.static('client'));

// set up server
const port = 3015;

const server = app.listen(port, () => {
    console.log(`server running on localhost: ${port}`);
});

// GET route that returns projectData
app.get('/all', (req, res) => {
    res.send(projectData);
});

// POST route that adds incoming data to projectData
app.post('/addData', (req, res) => {
    console.log(req.body);

    // projectData.newData = req.body.newInfo;
    projectData.number = req.body.number;
    projectData.text = req.body.text;

    //if our endpoint was an aray:
    // projectData.push(req.body);

    res.send(projectData);
    console.log(projectData);
})
