const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  //index.js into ./dist
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
    assetModuleFilename: "images/[name][ext][query]",
  },

  module: {
    rules: [
      {
        //readibility within all browsers
        test: /\.js$/, //using regex to tell babel exactly what files to transcompile
        exclude: /node_modules/, // files to be ignored
        use: {
          loader: "babel-loader", // specify the loader
        },
      },
      //SCSS to CSS
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      //images into ./dist
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  //optimizes CSS structure-one line no space
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  //project is running at http://localhost:8080/ when npm run start
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,
    watchOptions: {
      poll: true,
      ignored: "/node_modules/",
    },
    port: 8080,
  },
  plugins: [
    //CSS into /.dist
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new HtmlWebpackPlugin({
      title: "Book Finder",
      template: "./src/index.html",
      cache: false,
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv(),
  ],
};
