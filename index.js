var settings = require('./settings.js');

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = new express();
var staticFiles = express.static(__dirname + "/public");
app.use(staticFiles);
var urlEncoded = bodyParser.urlencoded({
    extended: true
});
app.use(urlEncoded);

var clipboards = {};
var nothingMsg = "Nothing is here, Write something!";


app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.post("/get", (request, response) => {
    var boardName = request.body.name;
    var oldBoard = "";
    
    if(boardName in clipboards){
        oldBoard = clipboards[boardName];
        delete clipboards[boardName];
    } else {
        oldBoard = nothingMsg;
    }
    
    response.send(oldBoard);
});

app.post("/set", (request, response) => {
    var boardName = request.body.name;
    var newBoard = request.body.content;
    var oldBoard = "";
    
    if(newBoard == "" || newBoard == oldBoard || newBoard == nothingMsg) {
        delete clipboards[boardName];
        oldBoard = "You need to have some content!";
    } else {
        clipboards[boardName] = newBoard;
        oldBoard = "Saved!";
    }
    
    response.send(oldBoard);
});

app.listen(settings.port, () => {
    console.log("Server Started");
})