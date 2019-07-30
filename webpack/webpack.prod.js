const common = require('./webpack.config');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new OptimizeCSSAssetsPlugin()]
});
