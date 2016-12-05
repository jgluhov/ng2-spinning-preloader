const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

console.log(path.resolve(__dirname, '../../', 'src'));

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
      path.resolve(__dirname, '/../../', 'node_modules')
    ],
    extensions: ['',  '.js', '.ts'],
    fallback: path.resolve(__dirname, '/../../', 'node_modules'),
    alias: {
      'ng2-spinning-preloader$': path.resolve(__dirname, '../../', 'src'),
      'ng2-spinning-preloader-styles': path.resolve(__dirname, '../../', 'dist')
    }
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
        loader: 'ts',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract('style', 'css?sourceMap')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ExtractTextWebpackPlugin('[name].css')
  ]
};
