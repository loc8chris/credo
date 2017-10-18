let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let apiRoutes =  require("./routes/entry-api-routes");
let Entry = require("./models/entries.js")
var mongoose = require("mongoose");

mongoose.Promise = Promise;



let app = express();
var port = process.env.PORT || 3000;

mongoose.connect("mongodb://heroku_prs7c3pr:mric8v5ovrai19d5pl4tdbg7ni@ds161584.mlab.com:61584/heroku_prs7c3pr");
var db = mongoose.connection;
// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
  });
  
// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
console.log("Mongoose connection successful.");
});

app.use(bodyParser.urlencoded({
    extended: false
}));

apiRoutes(app);

app.get("/", function(req, res){
    res.send("You made it.");
})

app.listen(port, function(){
    console.log("Listening on port " + port);
})


