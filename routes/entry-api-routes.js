// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models/entries");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/entries", function(req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    db.Entry.find(
      query
    ).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/entries/:id", function(req, res) {
    db.Entry.findOne({
        _id: req.params.id
    }).then(function(entry) {
      console.log(entry);
      res.json(entry);
    });
  });

  // POST route for saving a new post
  app.post("/api/entries", function(req, res) {
    
    console.log("posting entry");
    console.log(req.body);
    db.Entry.create(req.body).then(function(entry) {
      res.json(entry);
    },
    function(err){
      res.send(err);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/entries/:id", function(req, res) {
    db.Entry.remove(
      {
        _id: req.params.id
      }
    ).then(function(entry) {
      res.json(entry);
    });
  });

  // PUT route for updating posts
  app.put("/api/entries", function(req, res) {
    db.Entry.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(entry) {
        res.json(entry);
      });
  });
};
