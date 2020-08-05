const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  optimization: {
      minimize: false
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port:8888
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};