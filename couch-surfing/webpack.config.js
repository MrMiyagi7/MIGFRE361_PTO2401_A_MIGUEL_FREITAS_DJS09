const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/dev-server",
    "./src/index.ts",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    open: true, // Automatically open the browser
    port: 3000, // You can set the port here
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Rule for processing CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
