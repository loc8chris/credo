// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var UserSchema = new Schema({
  
  // title is a required string
  email: {
    type: String,
    required: true
  },

  // link is a required string
  password: {
    type: String,
    required: true
  }

});

// Create the Article model with the ArticleSchema
var User = mongoose.model("User", UserSchema);

// Export the model
module.exports = {
  User: User
} 