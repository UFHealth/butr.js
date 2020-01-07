const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
const mode = isDev ? 'development' : 'production'
const devtool = isDev ? 'eval' : false

module.exports = {
  mode,
  devtool,
  entry: {
    butr: './src/butr.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                modules: false,
                useBuiltIns: 'usage',
                corejs: 3
              }],
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
}
