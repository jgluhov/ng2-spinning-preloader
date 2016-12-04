const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: 'http://localhost:3000/'
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }

});