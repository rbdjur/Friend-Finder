// dependencies 
var http = require("http");
var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express helps handle data parsing
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function handleRequest(req, res) {
    var path = req.url;

    switch (path) {
        case "/":
        return renderHomePage(req, res);
    }
}; 



// function renderHomePage(req, res) {
//     fs.readFile(__dirname + "/public/home.html", function(err, data) {
//         console.log("home page should show up");
//     })
// }

// ROUTES that will initiate different html pages
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
  });