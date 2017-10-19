var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, "src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "client"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /.js(|x)$/, loader: 'babel-loader' }
    ]
  }
}
