// // Dependencies
// var http = require("http");
// var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express helps handle data parsing
var app = express();

// Port
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// gives other ROUTES to navigate on the page
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




// Initiate listening for server 
app.listen(PORT, function() {
    console.log("Friend-Finder on PORT" + PORT);
    console.log("SERVER ONLY");
})