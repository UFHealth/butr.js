const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/butr.js',
  devServer: {
    contentBase: './public',
    hot: true,
    watchContentBase: true,
    port: 5000
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'butr.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    library: 'butr'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
