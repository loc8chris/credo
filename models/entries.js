// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

/*

                email: entriesList.email,
                feelingName: entriesList.feelingName,
                characerTrait: entriesList.characterTrait,
                score: entriesList.score,
                thought: entriesList.thought
*/
// Create article schema
var EntrySchema = new Schema({
  email: {
    type: String,
    required: true
  },
  // title is a required string
  name: {
    type: String,
    required: true
  },

  characterTrait: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  // link is a required string
  thought: {
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