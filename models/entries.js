// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var EntrySchema = new Schema({
  AuthorId: {
    type: String,
    required: true
  },
  // title is a required string
  imageName: {
    type: String,
    required: true
  },

  // link is a required string
  text: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  }
});

// Create the Article model with the ArticleSchema
var Entry = mongoose.model("Entry", EntrySchema);

// Export the model
module.exports = {
  Entry: Entry
} 