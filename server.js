// server.js

var express = require('express');
var app = express();
var os = require('os');

var port = process.env.PORT || 5001;   

app.get('/', function(req, res) {
    res.json('Hello nodejs from Azure Web App on Linux - Version 1.0 - Host name : ' + os.hostname());
});

// start the app
app.listen(port);

console.log("Application listening on http://localhost:"+port);