const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/butr.js',
  devServer: {
    contentBase: './test',
    hot: true,
    host: '0.0.0.0',
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
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'butr.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    libraryTarget: 'window',
    library: 'butr'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
