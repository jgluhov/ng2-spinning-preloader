const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: './vendor.ts',
    app: './index.ts'
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, '../../', 'node_modules')
    ],
    extensions: ['',  '.js', '.ts'],
    fallback: path.resolve(__dirname, '../../', 'node_modules')
  },
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    extensions: ['',  '.js', '.styl'],
    moduleTemplates: ['*-loader', '*']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
