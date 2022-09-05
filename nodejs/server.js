const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('demo'));

const port = 9999;
const server = app.listen(port, listening);

function listening(){
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}

const data=[]
app.post('/addMovie',addMovie)

function addMovie(req,res){
    console.log(req.body)
    data.push(req.body)
}

app.post('/add', function (request, response) {
    let data = request.body;
    console.log(data);
});