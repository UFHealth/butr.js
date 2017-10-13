const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const mergeConfig = require('webpack-merge')

// Define separate targets for browser and module usage.
const targets = {
  'browser': {
    output: {
      filename: 'butr.min.js',
      libraryTarget: 'window',
      library: 'butr'
    },
    plugins: [
      new UglifyJSPlugin()
    ]
  },
  'commonjs': {
    output: {
      filename: 'butr.common.js',
      libraryTarget: 'commonjs2'
    }
  }
}

const baseConfig = {
  entry: './src/butr.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
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
  }
}

let configs = []
for (let target in targets) {
  configs.push(mergeConfig(baseConfig, targets[target]))
}

module.exports = configs
