const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.cjsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.cjsx$/, loader: 'coffee-jsx-loader', exclude: /node_modules/ },
      { test: /\.coffee$/, loader: 'coffee-jsx-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
// add this line
