const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const mode = isDev ? "development" : "production";
const devtool = isDev ? "eval" : false;

module.exports = {
  mode,
  devtool,
  entry: {
    Butr: "./src/butr.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    library: "[name]",
    libraryTarget: "umd",
    libraryExport: "default",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: false,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  optimization: {
    minimize: !isDev,
    minimizer: isDev ? false : [new TerserPlugin()],
  },
};
