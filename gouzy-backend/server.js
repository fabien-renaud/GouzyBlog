const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const app           = express();
const mongoose      = require('mongoose');

require('./schema/Article');
const api           = require('./api/');

// Enable bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// CORS definition
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next();
});

// Mongoose Instantiation
const uri = "mongodb+srv://tenrah:<password>@gouzyblog-twqra.mongodb.net/gouzydb";
mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => console.log("Connection etablished"))
    .catch((e) => console.log("MongoDB Connection error : " + e));

// API route
app.use('/api', api);

// Application resources & route
app.use(express.static(path.join(__dirname, '/..', 'gouzy-react', 'build')));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/..', 'gouzy-react', 'build', 'index.html'));
});

// Get environment port or use 3000
const port = '9000';
app.listen(port);
