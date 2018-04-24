var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'disc');
var APP_DIR = path.resolve(__dirname, 'src');

const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: APP_DIR + '/app.jsx',
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
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file' }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new webpack.NamedModulesPlugin()
  ]
};