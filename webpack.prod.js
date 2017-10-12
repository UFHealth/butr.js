const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/butr.js',
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
    filename: 'butr.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'butr'
  },
  plugins: [
    new UglifyJSPlugin()
  ],
}
