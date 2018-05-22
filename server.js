// // Dependencies
var http = require("http");
var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express helps handle data parsing
var app = express();

// Port
var PORT = process.env.PORT || 8000;

// create a function that uses a "handleRequest(request,response)" to handle requests, and responses.
function handleRequest(request, response){
};



// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// gives other ROUTES to navigate on the page
// require("app/routing/apiRoutes.js")(app);
// require("app/routing/htmlRoutes.js")(app);

// ROUTES that will initiate different html pages

//GET ROUTES
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
  });

  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/data/friends.js"));
  });

  // POST ROUTES

app.post("/app/data/friends.js", function(req, res) {
    console.log(req.body);
})



// Initiate listening for server 
app.listen(PORT, function() {
    console.log("Friend-Finder on PORT" + PORT);
    console.log("SERVER ONLY");
})