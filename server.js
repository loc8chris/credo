let express = require("express");
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
let path = require("path");
let bodyParser = require("body-parser");
let apiRoutes =  require("./routes/entry-api-routes");
let feelingApiRoutes =  require("./routes/feeling-api-routes");
let userApiRoutes = require("./routes/user-api-routes");
let Entry = require("./models/entries.js");
var mongoose = require("mongoose");

mongoose.Promise = Promise;



let app = express();

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

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

app.use(express.static("client"));
apiRoutes(app);
feelingApiRoutes(app);
userApiRoutes(app);

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/client/index.html"));
})

app.listen(port, function(){
    console.log("Listening on port " + port);
})


