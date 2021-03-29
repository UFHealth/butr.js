const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
const mode = isDev ? 'development' : 'production'
const devtool = isDev ? 'eval' : false

module.exports = {
  mode,
  devtool,
  entry: {
    bundle: './example/as-module.js'
  },
  output: {
    path: path.resolve(__dirname, '../example'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env']]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  optimization: {
    minimize: !isDev,
    minimizer: isDev ? false : [new TerserPlugin()]
  }
}
