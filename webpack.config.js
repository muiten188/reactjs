var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'disc');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: 'css-loader'
      },
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file' }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: 'src/client/index.html'
    })
  ]
};
