const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');

const app = express();

// Enable bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Configure mongoose
let uri = 'mongodb://user:password' +
    'gouzyblog-shard-00-00-twqra.mongodb.net:27017,' +
    'gouzyblog-shard-00-01-twqra.mongodb.net:27017,' +
    'gouzyblog-shard-00-02-twqra.mongodb.net:27017/gouzydb?' +
    'ssl=true&replicaSet=GouzyBlog-shard-0';
mongoose.connect(uri, { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connected !")
});

// CORS definition
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next();
});

app.use(express.static(path.join(__dirname, '/..', 'gouzy-react', 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/..', 'gouzy-react', 'build', 'index.html'));
});

// Get environment port or use 3000
const port = '9000';
app.listen(port);
