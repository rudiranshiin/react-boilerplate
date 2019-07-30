const path = require('path');
const common = require('./webpack.config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const HTML_DIR = path.resolve(__dirname, '../public/index.html');

const devConfig = merge(common, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: HTML_DIR
    }),
    new DashboardPlugin()
  ]
});

module.exports = devConfig;
