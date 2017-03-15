// require express to create the listener and do the routing
var express = require('express');
var app = express();

// Routes
app.get('/', function (req, res){
    res.sendFile('index.html', { root: './public/html' });
})

app.get('/mainController.js', function (req, res) {
    res.sendFile('mainController.js', { root: './controller/' });
})

app.get('/countries.json', function (req, res) {
    res.sendFile('countries.json', { root: './database/' });
})

// create the node http server, listening to port 8080
app.listen(8080, function(err) {
    if (err) {
        console.log("Server failed to start:", err)
    } else {
        console.log("Server is up on port 8080")
    }
})
