// // // Dependencies
// var http = require("http");
// var fs = require("fs");
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");

// // express helps handle data parsing
// var app = express();

// //GET ROUTES
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
//   });

//   app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
//   });

//   app.get("/api/friends", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/data/friends.js"));
//   });

// // POST ROUTES
// app.post("/data/friends.js", function(req, res) {
//     console.log("POST method,  info in req body", req.body);
//     var newUser = req.body;
//     newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();
//     console.log(newUser);
//     users.push(newUser);
//     res.json(newUser);
// })