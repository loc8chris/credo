// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models/feelings");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/feelings", function(req, res) {
    var query = {};
    if (req.query.feeling_id) {
      query._id = req.query.feeling_id;
    }
    db.Feeling.find(
      query
    ).then(function(feeling) {
      res.json(feeling);
    });
  });

  app.get("/api/feelings", function(req, res) {
    var query = {};
    query.name = req.params.feelingName;
    db.Entry.find(
      query
    ).then(function(feeling) {
      res.json(feeling);
    });
  });


};