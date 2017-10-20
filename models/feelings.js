// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var FeelingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  // title is a required string
  score: {
    type: Number
  },

  thoughts: {
      type: Array
  },

  // link is a required string
  reaction: {
    type: String
  }

});

// Create the Article model with the ArticleSchema
var Feeling = mongoose.model("Feeling", FeelingSchema);

// Export the model
module.exports = {
  Feeling: Feeling
} 