// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models/users");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/users", function(req, res) {
    var query = {};
    if (req.query.userId) {
      query.userId = req.query.user_id;
    }
    db.User.find(
      query
    ).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
        _id: req.params.id
    }).then(function(user) {
      console.log(user);
      res.json(user);
    });
  });

  // POST route for saving a new post
  app.post("/api/users", function(req, res) {
    
      console.log("posting user");
      console.log(req.body);
      if(req.body.password.length < 6){
        res.send("password length not valid")
      }
      db.User.findOne({
        email: req.body.email
      })
      .then(function(user) {
        console.log("result of user.findOne " + user)
        if (user){
          res.send("user already exists");

        }
        else {
          db.User.create(req.body)
          .then(function(user) {
            res.json(user);
          })

        }
        
        
      })

    },
    function(err){
      res.send(err);
    });

  app.post("/api/login", function(req, res) {
    
    console.log("user login");
    console.log(req.body);
    db.User.findOne({email:req.body.email, password:req.body.password}).then(function(user) {
      res.json(user);
    },
    function(err){
      res.send(err);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/users/:id", function(req, res) {
    db.User.remove(
      {
        _id: req.params.id
      }
    ).then(function(user) {
      res.json(user);
    });
  });

};