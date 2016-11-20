// server.js

var express = require('express');
var app = express();

var port = process.env.PORT || 5001;   

app.get('/', function(req, res) {
    res.json("Hello nodejs from Azure Web App on Linux - Version 1.1");
});

// start the app
app.listen(port);