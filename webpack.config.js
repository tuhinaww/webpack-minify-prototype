const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const fs = require("fs");

const versionFilePath = path.resolve(__dirname, "version.json");

let buildNumber = 1;
if (fs.existsSync(versionFilePath)) {
  const versionData = JSON.parse(fs.readFileSync(versionFilePath, "utf-8"));
  buildNumber = versionData.buildNumber + 1;
}

fs.writeFileSync(versionFilePath, JSON.stringify({ buildNumber }));

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "js/[name].[contenthash].min.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "css/[name].[contenthash].min.css" }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: `index-${buildNumber}.html`,  
      minify: { collapseWhitespace: true, removeComments: true },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
};

