const debug = process.env.NODE_ENV !== "production";
const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, 'src/js/client.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: { presets: ['es2015', 'stage-0', 'react'] }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      CONTACTS_API_URI: debug ? 'http://localhost:8000' : ''
    })
  ]
};
