const path = require('path')
const mergeConfig = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')

// Define separate targets for browser and module usage.
const targets = {
  'browser': {
    output: {
      filename: 'butr.min.js',
      libraryTarget: 'window',
      library: 'butr'
    },
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
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}

let configs = []
for (let target in targets) {
  configs.push(mergeConfig(baseConfig, targets[target]))
}

module.exports = configs
