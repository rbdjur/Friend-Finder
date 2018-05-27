// // // Dependencies
// var http = require("http");
// var fs = require("fs");
// var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");

// // express helps handle data parsing
// var app = express();
var friends = require("../data/friends.js");

// //GET ROUTES  - Routing
module.exports = function (app) {
    app.get("/api/friends", function (req,res) {
        console.log("LOOK HERE", req.body);
        // module.exports = userData;
        // res.sendFile(path.join(__dirname, "../data/friends.js"));
        res.json(friends);
    })
    // POST ROUTES
    app.post("/api/friends", function (req, res) {
        console.log("POST method, info in req body", req.body)

        var userData = req.body;
        friends.push(userData);
        var userScores = userData.scores;
        var totalDifference = 1000;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
    

        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            var currentFriendScore = 0;

            console.log(currentFriend.name);
            for (var a = 0; a < 10; a++) {
                var qDif = userData.scores[a] - currentFriend.scores[a];
                currentFriendScore += qDif;

            }
            if (currentFriendScore <= totalDifference) {
                bestMatch = currentFriend;

            }
            res.json(bestMatch);
        }


        res.json(friends);
    });
}


//   app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
//   });



// module.exports = function (app) {
//     app.get("/api/friends", function(req, res) {
//         res.json(req.body);
//       });
// }

