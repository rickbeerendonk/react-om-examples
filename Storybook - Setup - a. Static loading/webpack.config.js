/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/app.jsx'],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    port: 9100
  },
  mode: 'development',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        use: 'eslint-loader',
        exclude: /node_modules|packages/
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules|packages/
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:
        'Setup Storybook (Static), Hot Module Replacement, Webpack, ESLint & Babel'
    }),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js', '.jsx', '.json']
  }
};
