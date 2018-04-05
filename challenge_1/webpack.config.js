const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'client');

const config = {
  entry: APP_DIR + '/app.jsx',
  
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  externals: {
    "jquery": "jQuery"
  }
};

module.exports = config;