const path = require('path');
const common = require('./webpack.config');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTML_DIR = path.resolve(__dirname, '../public/index.html');

const prodConfig = merge(common, {
  mode: 'production',
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new HtmlWebpackPlugin({
      template: HTML_DIR,
      inject: false,
      hash: true,
      minify: {
        removeAtrributeQuotes: true,
        collapseWhiteSpace: true,
        removeComments: true
      }
    })
  ]
});

module.exports = prodConfig;
