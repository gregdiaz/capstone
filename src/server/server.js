// Setup empty JS object to act as endpoint for all routes
projectData = [];
var path = require('path')
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const port = 5000;
// Setup Server
const server = app.listen(port, ()=>{console.log(`Server Running on localhost: ${port}`)});

app.get('/', function (req, res) {
    debugger
    console.log(res)
    res.sendFile(path.resolve('src/client/views/index.html'));
});

app.post('/', addEntry);

function addEntry(req,res){
    console.log("Body", req.body);
    newEntry = {
        date: req.body.newDate,
        temp:req.body.main.temp,
        content:req.body.content
    }
    projectData.push(newEntry);
    console.log("server", projectData);
    res.send(newEntry);
};

